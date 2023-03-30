function writeNext(i)
{
    if(i == 5)
        return;

    setTimeout(function()
    {
        writeNext(i + 1);
        console.log(i);

    }, 2000);
}

writeNext(1);

