Add-Type -AssemblyName System.Drawing

$publicDir = Join-Path $PSScriptRoot "..\public"
if (-not (Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir -Force | Out-Null
}

# ==========================================
# 1. Generate 1200x630 og-image.png
# ==========================================
$width = 1200
$height = 630
$bmp = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Background Gradient
$rect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$cTop = [System.Drawing.ColorTranslator]::FromHtml('#090D16')
$cBottom = [System.Drawing.ColorTranslator]::FromHtml('#0F172A')
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $cTop, $cBottom, 45.0)
$g.FillRectangle($brush, $rect)
$brush.Dispose()

# Subtle Grid Lines
$gridPen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#162032'), 1)
for ($x = 40; $x -lt $width; $x += 60) {
    $g.DrawLine($gridPen, $x, 0, $x, $height)
}
for ($y = 40; $y -lt $height; $y += 60) {
    $g.DrawLine($gridPen, 0, $y, $width, $y)
}
$gridPen.Dispose()

# Glowing circular beacon behind logo
$glowRect = New-Object System.Drawing.Rectangle(100, 150, 260, 260)
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse($glowRect)
$pbg = New-Object System.Drawing.Drawing2D.PathGradientBrush($path)
$pbg.CenterColor = [System.Drawing.Color]::FromArgb(70, 16, 185, 129)
$pbg.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 9, 13, 22))
$g.FillPath($pbg, $path)
$path.Dispose()
$pbg.Dispose()

# Outer rounded box for prism logo
$boxRect = New-Object System.Drawing.Rectangle(140, 190, 180, 180)
$boxBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#111827'))
$boxPen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#10B981'), 2)
$g.FillRectangle($boxBrush, $boxRect)
$g.DrawRectangle($boxPen, $boxRect)
$boxBrush.Dispose()
$boxPen.Dispose()

# Triangle / Prism Glyph
$prismPen1 = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#475569'), 5)
$p1 = New-Object System.Drawing.Point(230, 225)
$p2 = New-Object System.Drawing.Point(175, 325)
$p3 = New-Object System.Drawing.Point(285, 325)
$g.DrawPolygon($prismPen1, @($p1, $p2, $p3))
$prismPen1.Dispose()

$prismPen2 = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#10B981'), 5)
$p2_inner = New-Object System.Drawing.Point(195, 300)
$p3_inner = New-Object System.Drawing.Point(265, 300)
$g.DrawLine($prismPen2, $p1, $p2_inner)
$g.DrawLine($prismPen2, $p1, $p3_inner)
$g.DrawLine($prismPen2, $p2_inner, $p3_inner)
$prismPen2.Dispose()

$beaconBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#10B981'))
$g.FillEllipse($beaconBrush, 220, 290, 20, 20)
$beaconBrush.Dispose()

# Brand Badge
$badgeBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#132320'))
$badgePen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#059669'), 1)
$g.FillRectangle($badgeBrush, 380, 165, 400, 36)
$g.DrawRectangle($badgePen, 380, 165, 400, 36)
$badgeBrush.Dispose()
$badgePen.Dispose()

$fontBadge = New-Object System.Drawing.Font('Segoe UI', 11, [System.Drawing.FontStyle]::Bold)
$brushBadge = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#34D399'))
$g.DrawString('THE INVISIBLE · 第三方信息指引导航', $fontBadge, $brushBadge, 396, 173)
$fontBadge.Dispose()
$brushBadge.Dispose()

# Brand Title
$fontTitle = New-Object System.Drawing.Font('Microsoft YaHei', 42, [System.Drawing.FontStyle]::Bold)
$brushTitle = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#FFFFFF'))
$g.DrawString('隐形人', $fontTitle, $brushTitle, 375, 215)
$fontTitle.Dispose()
$brushTitle.Dispose()

# English Title
$fontEn = New-Object System.Drawing.Font('Segoe UI', 24, [System.Drawing.FontStyle]::Regular)
$brushEn = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#64748B'))
$g.DrawString('The Invisible', $fontEn, $brushEn, 555, 232)
$fontEn.Dispose()
$brushEn.Dispose()

# Subtitle / Tagline
$fontSub = New-Object System.Drawing.Font('Microsoft YaHei', 20, [System.Drawing.FontStyle]::Regular)
$brushSub = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#CBD5E1'))
$g.DrawString('专注高隐私网络与全球出海连接指引', $fontSub, $brushSub, 380, 300)
$fontSub.Dispose()
$brushSub.Dispose()

# Feature list
$fontFeat = New-Object System.Drawing.Font('Microsoft YaHei', 13, [System.Drawing.FontStyle]::Regular)
$brushFeat = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#94A3B8'))
$g.DrawString('多协议混淆解析  |  骨干冗余容灾  |  规则分流策略  |  方案选型指南', $fontFeat, $brushFeat, 380, 365)
$fontFeat.Dispose()
$brushFeat.Dispose()

# Bottom Bar
$botPen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#1E293B'), 1)
$g.DrawLine($botPen, 80, 520, 1120, 520)
$botPen.Dispose()

$fontDomain = New-Object System.Drawing.Font('Segoe UI', 13, [System.Drawing.FontStyle]::Bold)
$brushDomain = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#10B981'))
$g.DrawString('https://yinxingren.shop', $fontDomain, $brushDomain, 80, 545)
$fontDomain.Dispose()
$brushDomain.Dispose()

$fontNotice = New-Object System.Drawing.Font('Microsoft YaHei', 11, [System.Drawing.FontStyle]::Regular)
$brushNotice = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#64748B'))
$g.DrawString('独立第三方信息导航站 · 客观技术评测与多平台配置说明', $fontNotice, $brushNotice, 680, 548)
$fontNotice.Dispose()
$brushNotice.Dispose()

$g.Dispose()
$ogPath = Join-Path $publicDir "og-image.png"
$bmp.Save($ogPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "Saved og-image.png to $ogPath"

# ==========================================
# 2. Generate 180x180 apple-touch-icon.png
# ==========================================
$iconSize = 180
$iconBmp = New-Object System.Drawing.Bitmap($iconSize, $iconSize)
$ig = [System.Drawing.Graphics]::FromImage($iconBmp)
$ig.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$ig.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

$iconBg = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#0F172A'))
$ig.FillRectangle($iconBg, 0, 0, $iconSize, $iconSize)
$iconBg.Dispose()

# Border
$iconBorder = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#1E293B'), 3)
$ig.DrawRectangle($iconBorder, 1, 1, 178, 178)
$iconBorder.Dispose()

# Prism Glyph centered
$prismPen1 = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#334155'), 6)
$ip1 = New-Object System.Drawing.Point(90, 40)
$ip2 = New-Object System.Drawing.Point(40, 135)
$ip3 = New-Object System.Drawing.Point(140, 135)
$ig.DrawPolygon($prismPen1, @($ip1, $ip2, $ip3))
$prismPen1.Dispose()

$prismPen2 = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#10B981'), 6)
$ip2_inner = New-Object System.Drawing.Point(60, 115)
$ip3_inner = New-Object System.Drawing.Point(120, 115)
$ig.DrawLine($prismPen2, $ip1, $ip2_inner)
$ig.DrawLine($prismPen2, $ip1, $ip3_inner)
$ig.DrawLine($prismPen2, $ip2_inner, $ip3_inner)
$prismPen2.Dispose()

$beaconBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#10B981'))
$ig.FillEllipse($beaconBrush, 82, 107, 16, 16)
$beaconBrush.Dispose()

$ig.Dispose()
$iconPath = Join-Path $publicDir "apple-touch-icon.png"
$iconBmp.Save($iconPath, [System.Drawing.Imaging.ImageFormat]::Png)
$iconBmp.Dispose()
Write-Output "Saved apple-touch-icon.png to $iconPath"
