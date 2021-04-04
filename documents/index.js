module.exports = ({ name, price1, price2, receiptId }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td class="title"><img  src="data:image/jpeg;base64,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"
                               style="width:100%; max-width:156px;"></td>
                            <td>
                              
                               Date: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                              
                              
                           </td>
                        
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Customer name: ${name}
                            </td>
                            <td>
                               Receipt number: ${receiptId}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td>Bought items:</td>
                   <td>Price</td>
                </tr>
                <tr class="item">
                   <td>First item:</td>
                   <td>${price1}$</td>
                </tr>
                <tr class="item">
                   <td>Second item:</td>
                   <td>${price2}$</td>
                </tr>
             </table>
             <br />
             <h1 class="justify-center">Total price: ${parseInt(price1) + parseInt(price2)}$</h1>
          </div>
       </body>
    </html>
    `;
};