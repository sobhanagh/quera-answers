#!/bin/bash

> .env

while IFS= read -r line; do
    if [[ "$line" =~ ^#.* || -z "$line" ]]; then
        echo "$line" >> .env
        continue
    fi

    IFS='=' read -r key value <<< "$line"

    if [[ -z "$value" ]]; then
        env_value="${!key}"
        if [[ -z "$env_value" ]]; then
            value="TODO_$key"
        else
            value="$env_value"
        fi
    fi

    echo "$key=$value" >> .env
done < .env.example

