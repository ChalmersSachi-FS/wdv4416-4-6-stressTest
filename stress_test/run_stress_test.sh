#!/bin/bash

# Create output directory if it doesn't exist
mkdir -p output

# Run JMeter Test
jmeter -n \
  -t stress_test_plan.jmx \
  -l output/results.jtl \
  -j output/jmeter.log \
  -e -o output/html-report \
  -Jjmeter.save.saveservice.output_format=csv
