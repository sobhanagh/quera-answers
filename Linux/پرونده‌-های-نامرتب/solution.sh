#!/bin/bash

mkdir -p Cases

tail -n +2 cases.csv | while IFS=',' read -r Name Type Status Description
do
		clean_name=$(echo "$Name" | tr ' ' '_')
		
		folder_path="Cases/$Type"
		mkdir -p "$folder_path"
		
		file_path="$folder_path/$clean_name"
		
		echo "$Description" > "$file_path"

		if [ "$Status" == "Solved" ]; then
			chmod 644 "$file_path"
		elif [ "$Status" == "In Progress" ]; then
			chmod 640 "$file_path"
		elif [ "$Status" == "Not Started" ]; then
			chmod 400 "$file_path"
		fi
	done


