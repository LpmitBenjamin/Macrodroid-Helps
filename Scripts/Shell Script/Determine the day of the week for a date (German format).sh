#!/bin/bash

datum="20.09.2024"
wochentag=$(date -d "$(echo "$datum" | awk -F. '{print $3"-"$2"-"$1}')" +%u)

case $wochentag in
  1) wochentag="Montag" ;;
  2) wochentag="Dienstag" ;;
  3) wochentag="Mittwoch" ;;
  4) wochentag="Donnerstag" ;;
  5) wochentag="Freitag" ;;
  6) wochentag="Samstag" ;;
  7) wochentag="Sonntag" ;;
esac

echo "Der $datum ist ein $wochentag."
