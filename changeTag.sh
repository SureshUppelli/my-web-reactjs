#! /bin/bash

tag="$1"
sed -i "s/tagVersion/$tag/g" novisync-web-react-frontend.yml