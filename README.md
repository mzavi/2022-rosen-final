# 2022-rosen-final

Issues and how I overcame them:
- Could not do Finance in regular VS Code. Had to go to https://ide.cs50.io and import financefrom there, doing the whole project on there.
- The API key function didn't work because apparently the service now requires a paid subscription so I eventually updated it with a different function that would return premade stock data in the same format (was initially thinking about asking for extension or project change for this issue)
- Prices and cash would display "$978.568999999999999999999" or something crazy long. I fixed this with a "{:.2f}".format({{var}}) 

Personal touches:
- Added transaction type to Finance for personal preference. The negative and positive shares weren't enough for me. To do this, I had to add another column to my transactions table and edit my code a little.
- Added add cash to finance



Overall, very glad I took this track. I learned a lot and got a taste of databases, website deisgn, and website functionality.