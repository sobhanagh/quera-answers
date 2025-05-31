#!/bin/bash

front="front.csv"
software="software.csv"

mapfile -t front_lines < <(sort -t',' -k2n "$front")
mapfile -t software_lines < <(sort -t',' -k2n "$software")

declare -A seen_front
declare -A seen_software

for line in "${front_lines[@]}"; do
  name="${line%%,*}"
  value="${line#*,}"
  if [[ -z "$name" ]]; then
    continue
  fi
  if [[ -z "${seen_front[$name]}" ]]; then
    seen_front[$name]="$line"
  else
    old_value="${seen_front[$name]#*,}"
    if (( value < old_value )); then
      seen_front[$name]="$line"
    fi
  fi
done

for line in "${software_lines[@]}"; do
  name="${line%%,*}"
  value="${line#*,}"
  if [[ -z "$name" ]]; then
    continue
  fi
  if [[ -z "${seen_software[$name]}" ]]; then
    seen_software[$name]="$line"
  else
    old_value="${seen_software[$name]#*,}"
    if (( value < old_value )); then
      seen_software[$name]="$line"
    fi
  fi
done

front_out=()
software_out=()

for name in "${!seen_front[@]}"; do
  if [[ -n "${seen_software[$name]}" ]]; then
    line="${seen_front[$name]}"
    value="${line#*,}"
    front_out+=("${name}*,$value")
  else
    front_out+=("${seen_front[$name]}")
  fi
done

for name in "${!seen_software[@]}"; do
  if [[ -n "${seen_front[$name]}" ]]; then
    line="${seen_software[$name]}"
    value="${line#*,}"
    software_out+=("${name}*,$value")
  else
    software_out+=("${seen_software[$name]}")
  fi
done

printf "%s\n" "${front_out[@]}" | sort -t',' -k2n > "$front"
printf "%s\n" "${software_out[@]}" | sort -t',' -k2n > "$software"

