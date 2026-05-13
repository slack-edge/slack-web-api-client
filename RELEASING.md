# Releasing

How to publish a new version of `slack-web-api-client` to npm.

## Prerequisites

- An npm account with publish access. Verify with:
  ```
  npm access list collaborators slack-web-api-client
  ```
- 2FA enabled on that npm account — the registry requires an OTP for publish.

## Steps

1. **Bump the version.** On a branch off `main`, edit `"version"` in `package.json`. Use a patch bump for additive/fix releases (project convention).
2. **Open a PR titled `version X.Y.Z`** and merge it to `main` once CI is green.
3. **Sync `main` locally:**
   ```
   git checkout main && git pull --ff-only
   ```
4. **Log in to npm** if `npm whoami` isn't already printing your username:
   ```
   npm login
   ```
5. **Publish:**
   ```
   npm publish
   ```
   The `prepublishOnly` script automatically runs `build:clean` + `ci-test` first. npm will then prompt for your 2FA OTP. To pass it inline (e.g. retrying after a timeout):
   ```
   npm publish --otp=123456
   ```
6. **Tag the published commit.** Lightweight tag with a `v` prefix, matching the convention used in [`slack-edge/slack-edge`](https://github.com/slack-edge/slack-edge/releases):
   ```
   git tag vX.Y.Z
   git push origin vX.Y.Z
   ```
   (Older tags `1.0.0` through `1.1.12` predate this convention and lack the `v` prefix — leave them as-is.)
7. **Publish a GitHub Release** at `vX.Y.Z`. Match the style of recent slack-edge releases: title equal to the tag, body a short bulleted changelog of changes since the previous version (no headings or extra prose).
   ```
   gh release create vX.Y.Z --title vX.Y.Z --latest --notes "- First change
   - Second change"
   ```
   Or omit `--notes` to draft the body interactively in `$EDITOR`.

## Verifying the release

Query the registry directly — `npm view` on your machine may hide freshly published versions if Safe-chain or a similar minimum-age filter is installed:

```
curl -s https://registry.npmjs.org/slack-web-api-client \
  | jq '."dist-tags".latest, .time["X.Y.Z"]'
```

GitHub compare view: `https://github.com/slack-edge/slack-web-api-client/compare/PREV...X.Y.Z`
