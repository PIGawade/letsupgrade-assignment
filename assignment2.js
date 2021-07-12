s="madam arora teaches malayalam"
s=s+ " "
word= ""
reverse= ""
for (t of s)
{
  if(t!=" ")
  {
  word=word+t
  reverse=t+reverse
  }
else
 {
   if(word==reverse)
  {
    console.log(word)
  }
    word= ""
    reverse= ""
  }
}
 
