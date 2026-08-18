let n = 5;
for (i = 5; i <= n; i--) {
    let row = "";
    for (j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row.trim());
}