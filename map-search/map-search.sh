#!/bin/zsh

EP=https://maps.googleapis.com/maps/api/place/nearbysearch/json
# https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters
# EP=https://maps.googleapis.com/maps/api/place/findplacefromtext/json


# 見川町
LOC="36.36074082461211,140.42849257736435"

# 半径１Km
RADIUS=500

# keyword: key1ORkey2OR...
KEYWORD="美容室"
# KEYWORD="居酒屋"
# KEYWORD=""

PLACE=heir_care
# restaurant,
# https://developers.google.com/maps/documentation/places/web-service/supported_types?hl=ja

LANG="ja"

# 価格帯（上限：0..4）
MAXPRICE=2

NAME=""

# 開店中
OPENNOW="false"

# 結果の表示順序
RANKBY=""

BIAS="circle:${RADIUS}@${LOC}"

# TYPE=

# PAGETOKEN=""

# Response params

FIELDS="formatted_address,name,business_status,place_id,type,user_ratings_total,price_level,rating"

# run

curl -v -X GET "${EP}?key=${MAP_APIKEY}&location=${LOC}&radius=${RADIUS}&language=${LANG}&keyword=${KEYWORD}"
# curl -v -X GET "${EP}?key=${APIKEY}&input=美容室&inputtype=textquery&fields=${FIELDS}&language=${LANG}&locationbias=${BIAS}"
