
# LaTeX invoice generator

Generate a nice looking pdf invoice using pdfLaTeX as
compiler.

## Usage

- Use `invoice init` to create new invoice.
- Edit your invoice.yml
- Add Items
- Use `invoice compile` to generate your PDF.

## invoice.yml

- `nr` - The invoice number
- `date`- The invoice date
- `from` - Your address
- `to` - Your clients address
- `account` - Key/Value hash of billing information.
- `items` - List of items on your invoice.
  - `.type` - Item type (for example: 'Development')
  - `.description` - Elaborate what you did.
  - `.rate` - Your hourly rate.
  - `.qty` - The hours you want to bill.


## Notice
This is highly opinionated. So YMMV.
Currently there is no comfortable way to modify the letterpaper.
This should be part of the config. Or maybe there should be
a global invoice setting.


