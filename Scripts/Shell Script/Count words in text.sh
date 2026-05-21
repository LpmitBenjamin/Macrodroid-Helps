#!/bin/bash

text="Red Bull Birne-Zimt
Cola 500ml
Rockstar Blueberry
Cola 150ml
Cola 150ml
Cola 200ml"

word_count=$(echo "$text" | wc -w)

echo "The text contains $word_count words."
