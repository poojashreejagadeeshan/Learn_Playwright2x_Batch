let retry = 0;
do {
    console.log("Execute the code!");
    console.log("retrying....", retry);
    retry++;
}
while (retry < 3);