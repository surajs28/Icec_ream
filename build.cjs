const esbuild=require('esbuild'),path=require('path');
for(const name of ['gelato','gelato-3d'])esbuild.buildSync({entryPoints:[path.join(__dirname,'src',name+'.js')],bundle:true,minify:true,format:'iife',platform:'browser',target:['chrome100','safari15.4'],outfile:path.join(__dirname,'public',name+'.js'),legalComments:'eof'});
