#!/bin/bash

#!/bin/bash
# Criado por Diego Duarte 2021

function print_centered {
     [[ $# == 0 ]] && return 1

     declare -i TERM_COLS="$(tput cols)"
     declare -i str_len="${#1}"
     [[ $str_len -ge $TERM_COLS ]] && {
          echo "$1";
          return 0;
     }

     declare -i filler_len="$(( (TERM_COLS - str_len) / 2 ))"
     [[ $# -ge 2 ]] && ch="${2:0:1}" || ch=" "
     filler=""
     for (( i = 0; i < filler_len; i++ )); do
          filler="${filler}${ch}"
     done

     printf "%s%s%s" "$filler" "$1" "$filler"
     [[ $(( (TERM_COLS - str_len) % 2 )) -ne 0 ]] && printf "%s" "${ch}"
     printf "\n"

     return 0
}

print_centered "-"  "-" 
print_centered "Construindo pacotes .deb e .rpm"
print_centered "-"  "-" 
echo -e

npm run make

read
