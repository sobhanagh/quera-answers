#!/bin/bash

arr=()
tmp=""

while read -r l; do
  if [[ "$l" == \!\[* ]]; then
    if [[ -n "$tmp" ]]; then
      arr+=("$tmp")
      tmp=""
    fi
  elif [[ -n "$l" ]]; then
    tmp+="$l "
  fi
done < quera.md

[[ -n "$tmp" ]] && arr+=("$tmp")

for b in "${arr[@]}"; do
  [ ${#b} -gt 200 ] && echo YES && exit 0
done

echo NO

