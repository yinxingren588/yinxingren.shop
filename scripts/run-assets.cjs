const cp = require('child_process');
const fs = require('fs');
const path = require('path');

const ps1Path = path.resolve(__dirname, 'generate-assets.ps1');
// Read the ps1 script with UTF-8
const content = fs.readFileSync(ps1Path, 'utf8');

// Encode as Base64 UTF-16LE for PowerShell -EncodedCommand
const encoded = Buffer.from(content, 'utf16le').toString('base64');

console.log('Invoking PowerShell with EncodedCommand...');
try {
  const output = cp.execSync(`powershell.exe -ExecutionPolicy Bypass -NoProfile -EncodedCommand ${encoded}`, {
    stdio: 'pipe',
    encoding: 'utf8'
  });
  console.log(output);
  console.log('Successfully generated assets via PowerShell EncodedCommand!');
} catch (err) {
  console.error('Error generating assets:', err.message);
  if (err.stdout) console.log('stdout:', err.stdout);
  if (err.stderr) console.error('stderr:', err.stderr);
  process.exit(1);
}
