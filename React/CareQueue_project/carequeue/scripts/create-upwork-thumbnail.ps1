Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$logoPath = Join-Path $root "src\assets\logo.png"
$outPath = Join-Path $root "public\carequeue-upwork-thumbnail.png"

$width = 1600
$height = 900
$bitmap = New-Object System.Drawing.Bitmap $width, $height
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

function New-Brush($hex) {
  return New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml($hex))
}

function New-Pen($hex, $size) {
  return New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml($hex)), $size
}

function Fill-RoundedRect($g, $brush, $x, $y, $w, $h, $r) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $path.AddArc($x, $y, $d, $d, 180, 90)
  $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  $g.FillPath($brush, $path)
  $path.Dispose()
}

function Draw-RoundedRect($g, $pen, $x, $y, $w, $h, $r) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $path.AddArc($x, $y, $d, $d, 180, 90)
  $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  $g.DrawPath($pen, $path)
  $path.Dispose()
}

function Draw-Text($g, $text, $font, $brush, $x, $y, $w, $h, $align = "Near") {
  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = [System.Drawing.StringAlignment]::$align
  $format.LineAlignment = [System.Drawing.StringAlignment]::Near
  $format.Trimming = [System.Drawing.StringTrimming]::EllipsisWord
  $rect = New-Object System.Drawing.RectangleF $x, $y, $w, $h
  $g.DrawString($text, $font, $brush, $rect, $format)
  $format.Dispose()
}

$bg = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Rectangle 0, 0, $width, $height),
  [System.Drawing.ColorTranslator]::FromHtml("#fff7f7"),
  [System.Drawing.ColorTranslator]::FromHtml("#eef7ff"),
  [System.Drawing.Drawing2D.LinearGradientMode]::ForwardDiagonal
)
$graphics.FillRectangle($bg, 0, 0, $width, $height)

$red = New-Brush "#dc2626"
$deep = New-Brush "#0f172a"
$muted = New-Brush "#475569"
$white = New-Brush "#ffffff"
$softRed = New-Brush "#fee2e2"
$pale = New-Brush "#f8fafc"
$green = New-Brush "#16a34a"
$blue = New-Brush "#2563eb"
$amber = New-Brush "#d97706"
$linePen = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml("#e2e8f0")), 3
$redPen = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml("#fecaca")), 3

$fontTitle = New-Object System.Drawing.Font "Segoe UI", 66, ([System.Drawing.FontStyle]::Bold)
$fontSubtitle = New-Object System.Drawing.Font "Segoe UI", 34, ([System.Drawing.FontStyle]::Regular)
$fontBrand = New-Object System.Drawing.Font "Segoe UI", 34, ([System.Drawing.FontStyle]::Bold)
$fontChip = New-Object System.Drawing.Font "Segoe UI", 24, ([System.Drawing.FontStyle]::Bold)
$fontSmall = New-Object System.Drawing.Font "Segoe UI", 16, ([System.Drawing.FontStyle]::Regular)
$fontCardTitle = New-Object System.Drawing.Font "Segoe UI", 23, ([System.Drawing.FontStyle]::Bold)

$logo = [System.Drawing.Image]::FromFile($logoPath)
$graphics.DrawImage($logo, 105, 78, 82, 82)
Draw-Text $graphics "CareQueue" $fontBrand $deep 205 94 360 52

Draw-Text $graphics "Healthcare App" $fontTitle $deep 105 215 760 100
Draw-Text $graphics "Diagnostics & doctor visits" $fontSubtitle $muted 110 346 700 58

$chips = @(
  @{ Text = "React"; X = 110; Y = 505; Color = "#dc2626"; Bg = "#fee2e2" },
  @{ Text = "Mobile UI"; X = 235; Y = 505; Color = "#2563eb"; Bg = "#dbeafe" },
  @{ Text = "Healthcare"; X = 455; Y = 505; Color = "#16a34a"; Bg = "#dcfce7" }
)

foreach ($chip in $chips) {
  $chipBrush = New-Brush $chip.Bg
  $textBrush = New-Brush $chip.Color
  $chipWidth = 95 + ($chip.Text.Length * 13)
  Fill-RoundedRect $graphics $chipBrush $chip.X $chip.Y $chipWidth 58 29
  Draw-Text $graphics $chip.Text $fontChip $textBrush ($chip.X + 28) ($chip.Y + 12) ($chipWidth - 40) 40
  $chipBrush.Dispose()
  $textBrush.Dispose()
}

Fill-RoundedRect $graphics $red 110 640 360 78 22
Draw-Text $graphics "Book Now" $fontChip $white 218 662 180 36
Draw-Text $graphics "Upwork portfolio thumbnail" $fontSmall $muted 110 747 440 40

Fill-RoundedRect $graphics (New-Brush "#ffffff") 860 120 540 665 34
Draw-RoundedRect $graphics $linePen 860 120 540 665 34
Fill-RoundedRect $graphics (New-Brush "#0f172a") 915 165 430 72 22
Draw-Text $graphics "CareQueue UI" $fontCardTitle $white 1000 184 230 40

$cards = @(
  @{ X = 915; Y = 285; Title = "Blood"; Meta = "50 centres"; Color = $red },
  @{ X = 1150; Y = 285; Title = "Scans"; Meta = "Fast slots"; Color = $blue },
  @{ X = 915; Y = 468; Title = "Doctors"; Meta = "Specialists"; Color = $green },
  @{ X = 1150; Y = 468; Title = "Bookings"; Meta = "Tracking"; Color = $amber }
)

foreach ($card in $cards) {
  Fill-RoundedRect $graphics $pale $card.X $card.Y 195 132 20
  Draw-RoundedRect $graphics $linePen $card.X $card.Y 195 132 20
  Fill-RoundedRect $graphics $card.Color ($card.X + 22) ($card.Y + 23) 42 42 12
  Draw-Text $graphics $card.Title $fontCardTitle $deep ($card.X + 22) ($card.Y + 74) 152 36
  Draw-Text $graphics $card.Meta $fontSmall $muted ($card.X + 22) ($card.Y + 104) 150 28
}

Fill-RoundedRect $graphics $softRed 915 650 430 80 20
Draw-Text $graphics "Mobile-ready flow" $fontCardTitle $red 988 674 300 36

$graphics.Dispose()
$logo.Dispose()
$bitmap.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bitmap.Dispose()

Write-Output $outPath
