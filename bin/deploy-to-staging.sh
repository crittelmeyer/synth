#!/bin/bash

npm pack
scp *.tgz root@staging.tillur.io:/root/tillur
