

function printRectangle(h, w,char)
{
	for(var i=0; i<h; i++)
	{
		console.log("\n");
		for(var j=0; j<w; j++)
		{
			// Print @ if this is first row
			// or last row. Or this column
			// is first or last.
			if (i == 0 || i == h-1 || 
				j== 0 || j == w-1)
        process.stdout.write(char)
			else
      process.stdout.write(" ")
		}
	}
}

printRectangle(4, 5,'*'); 



