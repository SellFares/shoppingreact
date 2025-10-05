#!/usr/bin/env bash
# simple-interest.sh - calculate simple interest
# Usage: ./simple-interest.sh <principal> <rate> <time>

if [ "$#" -ne 3 ]; then
  echo "Usage: $0 <principal> <rate> <time>"
  exit 1
fi

P=$1
R=$2
T=$3

# calculate simple interest: (P * R * T) / 100
SI=$(echo "scale=2; ($P * $R * $T) / 100" | bc)

echo "Simple Interest: $SI"
