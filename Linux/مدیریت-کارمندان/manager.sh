#!/bin/bash

command=$1
shift

if [[ $command != "city" && $command != "bonus" ]];then
	echo command not found
fi


if [[ $command == "bonus" ]];then
	arg_id=$1
	while IFS=',' read -r id city name phone price address; do
		if [[ $id == $arg_id ]];then
			value=$(awk "BEGIN { print $price * 0.05 }")
			echo $name will get \$$value bonus
			break
		fi
	done < employee.csv

elif [[ $command == "city" ]];then
        input_city=$1
        while IFS=',' read -r id city name phone price address; do
                if [[ $city == $input_city ]];then
                        echo Customer Name: $name
			echo Mobile No: $phone
                fi
        done < employee.csv
fi
		
		
