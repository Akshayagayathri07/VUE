import java.io.*;
import java.net.*;
import java.util.*;
public class crcs
{
public static void main(String[] args) throws IOException
{
Socket s=new Socket("localhost",1234);
//DataInpuptStream din=new DataInpuptStream(System.in);
DataOutputStream dout=new DataOutputStream(s.getOutputStream());
Scanner sc=new Scanner(System.in);
System.out.println("enter the data string:");
String st=sc.next();
System.out.println("enter the generator:");
String gen=sc.next();
char[] g=new char[20];
char[] d=new char[40];
for(int i=0;i<st.length();i++)
	d[i]=st.charAt(i);
for(int j=0;j<gen.length();j++)
	g[j]=gen.charAt(j);
System.out.println("append zeroes");
for(int i=st.length(), j=0;j<(gen.length()-1);i++,j++)
	d[i]='0';
for(int i=0,n=0;n<st.length();n++)
{
if(d[i]!='0')
{
	for(int j=0,k=i;j<gen.length();j++)
	{
		d[k]=xor(g[j],d[k]);
		//System.out.println(d[k]);
		k++;
	}
i++;
}
else
	i++;
}

for(int i=st.length(),n=0;n<(gen.length()-1);i++,n++)
	{st+=d[i];

//
}
System.out.println("data sent as:"+st);
dout.writeBytes(st+"\n");
s.close();
}
public static char xor(char x,char y)
{
if(x==y)
	return '0';
else 
	return '1';
}
}
	
