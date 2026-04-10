Get-ChildItem -Path src -Filter *.css -Recurse |
    Select-String -Pattern 'data:image' |
    ForEach-Object { "$($_.Path):$($_.LineNumber): $($_.Line)" }
