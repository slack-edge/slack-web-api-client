#!/bin/bash

script_dir=`dirname $0`
src_dir=${script_dir}/../src
src_deno_dir=${script_dir}/../src_deno

cp -p ${src_deno_dir}/deno.json . && \
  cp -p ${src_deno_dir}/README.md deno_README.md && \
  cp -p ${src_deno_dir}/LICENSE.txt deno_LICENSE.txt && \
  rm -rf ${src_deno_dir}/* && \
  cp -pr ${src_dir}/* ${src_deno_dir}/ && \
  mv ./deno.json ${src_deno_dir}/ && \
  mv ./deno_README.md ${src_deno_dir}/README.md && \
  mv ./deno_LICENSE.txt ${src_deno_dir}/LICENSE.txt && \
  cd ${script_dir} && \
  ruby ./deno_source_formatter.rb && \
  cd - && \
  cd ${src_deno_dir} && \
  deno fmt && \
  deno lint && \
  deno check ./mod.ts