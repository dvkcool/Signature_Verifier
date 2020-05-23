#!/bin/bash

# moving the image from current dest to new destination

# Step 1 - Deleting previous test image
rm -rf /media/sf_Kali_share/Backend-Python/data/test/021/*

# Step 2 - Copying new test image
mv -f ./Images/* /media/sf_Kali_share/Backend-Python/data/test/021/

# Step3 Remove previous test Result
rm -f a.txt

# Running python to test
python3 /media/sf_Kali_share/Backend-Python/sigrecog.py >> ~/Documents/nodeapp/a.txt
