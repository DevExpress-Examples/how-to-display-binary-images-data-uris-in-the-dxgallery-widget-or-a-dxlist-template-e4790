# How to display binary images (data URIs) in the dxGallery widget or a dxList template
<!-- run online -->
**[[Run Online]](https://codecentral.devexpress.com/e4790/)**
<!-- run online end -->


<p>To display binary images in the dxGallery widget or a dxList item template, encode your image byte array in base64 and use the <a href="http://en.wikipedia.org/wiki/Data_URI_scheme"><u>Data URI scheme</u></a>. In this case, all the processing will be done on the client side and your image elements inside the dxList template will look as follows:<br />
</p>

```html
<img data-bind="attr: { src: 'data:image/png;base64,' + your_image_bytes_in_base_64}" />

```

<p>You can use the following tools to convert any image into a base64 string:</p><p><a href="http://codecentral.devexpress.com/E4819/"><u>DevExpress - How to convert a binary image to a base64 string</u></a><br />
<a href="http://www.motobit.com/util/base64-decoder-encoder.asp"><u>Motobit</u></a><u><br />
</u><a href="http://dataurl.net/#dataurlmaker"><u>DataURL</u></a></p>

<br/>


