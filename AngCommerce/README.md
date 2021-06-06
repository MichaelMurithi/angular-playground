# AngCommerce

This is an implementation of this practice requirements exercises:

There is a commit for each exercise in the format of `practice(AngCommerce): completed <exercise>`.

- Use it to compare the difference in exercises

## First Exercise

In the first exercise, the following is accomplished:

1. Start a new project to build an ecommerce website.
2. Create a component to display a single product.
3. The product component should display a name, price, and image for the product.
   You can initialize the component with some defaults for the same. Use any placeholder
   image you want.
4. Highlight the entire element in a different color if the product is on sale. Whether
   the product is on sale can be an attribute of the product itself.
5. Add buttons to increase and decrease the quantity of the product in the cart. The
   quantity in the cart should be visible in the UI. Disable the button if the quantity
   is already zero.

## Second Exercise

For the second exercise, the following is accomplished

1. Move from using simple class binding to using either ngClass or the specific
   class binding from this chapter to highlight on-sale items. Have a combination of
   some on sale and some not on sale.
2. Instead of disabling the decrease quantity button when the quantity is zero, use
   \*ngIf to show the button only if it can be clicked.
3. Add a drop-down with quantity selection from 1 to 20 (generated via \*ngFor).
   Don’t worry about the action/update of data on selection of a quantity; we will
   get to that in one of the following chapters.
