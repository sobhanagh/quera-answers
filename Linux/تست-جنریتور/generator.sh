#!/bin/bash

mkdir -p out

for ((i=1; i<=$1; i++)); do
	input=$(cat in/input$i.txt)
	result=$(python3 main.py <<< "$input")
	echo $result > out/output$i.txt
done

