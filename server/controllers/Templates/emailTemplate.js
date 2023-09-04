// emailTemplate.js
const generateEmailContent = (user, populatedMovie, movieLink) => {
    return `
    <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
    style="padding: 0; margin: 0">

<head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>New message</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <style type="text/css">
        .rollover div {
            font-size: 0;
        }

        .rollover:hover .rollover-first {
            max-height: 0px !important;
            display: none !important;
        }

        .rollover:hover .rollover-second {
            max-height: none !important;
            display: inline-block !important;
        }

        #outlook a {
            padding: 0;
        }

        .ExternalClass {
            width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }

        .es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
        }

        @media only screen and (max-width: 600px) {

            p,
            ul li,
            ol li,
            a {
                line-height: 150% !important;
            }

            h1,
            h2,
            h3,
            h1 a,
            h2 a,
            h3 a {
                line-height: 120% !important;
            }

            h1 {
                font-size: 30px !important;
                text-align: center;
            }

            h2 {
                font-size: 26px !important;
                text-align: center;
            }

            h3 {
                font-size: 20px !important;
                text-align: center;
            }

            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
                font-size: 30px !important;
            }

            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
                font-size: 26px !important;
            }

            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
                font-size: 20px !important;
            }

            .es-menu td a {
                font-size: 16px !important;
            }

            .es-header-body p,
            .es-header-body ul li,
            .es-header-body ol li,
            .es-header-body a {
                font-size: 16px !important;
            }

            .es-content-body p,
            .es-content-body ul li,
            .es-content-body ol li,
            .es-content-body a {
                font-size: 16px !important;
            }

            .es-footer-body p,
            .es-footer-body ul li,
            .es-footer-body ol li,
            .es-footer-body a {
                font-size: 16px !important;
            }

            .es-infoblock p,
            .es-infoblock ul li,
            .es-infoblock ol li,
            .es-infoblock a {
                font-size: 12px !important;
            }

            *[class="gmail-fix"] {
                display: none !important;
            }

            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3 {
                text-align: center !important;
            }

            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3 {
                text-align: right !important;
            }

            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3 {
                text-align: left !important;
            }

            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
                display: inline !important;
            }

            .es-button-border {
                display: block !important;
            }

            .es-btn-fw {
                border-width: 10px 0px !important;
                text-align: center !important;
            }

            .es-adaptive table,
            .es-btn-fw,
            .es-btn-fw-brdr,
            .es-left,
            .es-right {
                width: 100% !important;
            }

            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
                width: 100% !important;
                max-width: 600px !important;
            }

            .es-adapt-td {
                display: block !important;
                width: 100% !important;
            }

            .adapt-img {
                width: 100% !important;
                height: auto !important;
            }

            .es-m-p0 {
                padding: 0 !important;
            }

            .es-m-p0r {
                padding-right: 0 !important;
            }

            .es-m-p0l {
                padding-left: 0 !important;
            }

            .es-m-p0t {
                padding-top: 0 !important;
            }

            .es-m-p0b {
                padding-bottom: 0 !important;
            }

            .es-m-p20b {
                padding-bottom: 20px !important;
            }

            .es-mobile-hidden,
            .es-hidden {
                display: none !important;
            }

            tr.es-desk-hidden,
            td.es-desk-hidden,
            table.es-desk-hidden {
                width: auto !important;
                overflow: visible !important;
                float: none !important;
                max-height: inherit !important;
                line-height: inherit !important;
            }

            tr.es-desk-hidden {
                display: table-row !important;
            }

            table.es-desk-hidden {
                display: table !important;
            }

            td.es-desk-menu-hidden {
                display: table-cell !important;
            }

            .es-menu td {
                width: 1% !important;
            }

            table.es-table-not-adapt,
            .esd-block-html table {
                width: auto !important;
            }

            table.es-social {
                display: inline-block !important;
            }

            table.es-social td {
                display: inline-block !important;
            }

            a.es-button,
            button.es-button {
                font-size: 20px !important;
                display: block !important;
                border-left-width: 0px !important;
                border-right-width: 0px !important;
            }

            .es-m-p5 {
                padding: 5px !important;
            }

            .es-m-p5t {
                padding-top: 5px !important;
            }

            .es-m-p5b {
                padding-bottom: 5px !important;
            }

            .es-m-p5r {
                padding-right: 5px !important;
            }

            .es-m-p5l {
                padding-left: 5px !important;
            }

            .es-m-p10 {
                padding: 10px !important;
            }

            .es-m-p10t {
                padding-top: 10px !important;
            }

            .es-m-p10b {
                padding-bottom: 10px !important;
            }

            .es-m-p10r {
                padding-right: 10px !important;
            }

            .es-m-p10l {
                padding-left: 10px !important;
            }

            .es-m-p15 {
                padding: 15px !important;
            }

            .es-m-p15t {
                padding-top: 15px !important;
            }

            .es-m-p15b {
                padding-bottom: 15px !important;
            }

            .es-m-p15r {
                padding-right: 15px !important;
            }

            .es-m-p15l {
                padding-left: 15px !important;
            }

            .es-m-p20 {
                padding: 20px !important;
            }

            .es-m-p20t {
                padding-top: 20px !important;
            }

            .es-m-p20r {
                padding-right: 20px !important;
            }

            .es-m-p20l {
                padding-left: 20px !important;
            }

            .es-m-p25 {
                padding: 25px !important;
            }

            .es-m-p25t {
                padding-top: 25px !important;
            }

            .es-m-p25b {
                padding-bottom: 25px !important;
            }

            .es-m-p25r {
                padding-right: 25px !important;
            }

            .es-m-p25l {
                padding-left: 25px !important;
            }

            .es-m-p30 {
                padding: 30px !important;
            }

            .es-m-p30t {
                padding-top: 30px !important;
            }

            .es-m-p30b {
                padding-bottom: 30px !important;
            }

            .es-m-p30r {
                padding-right: 30px !important;
            }

            .es-m-p30l {
                padding-left: 30px !important;
            }

            .es-m-p35 {
                padding: 35px !important;
            }

            .es-m-p35t {
                padding-top: 35px !important;
            }

            .es-m-p35b {
                padding-bottom: 35px !important;
            }

            .es-m-p35r {
                padding-right: 35px !important;
            }

            .es-m-p35l {
                padding-left: 35px !important;
            }

            .es-m-p40 {
                padding: 40px !important;
            }

            .es-m-p40t {
                padding-top: 40px !important;
            }

            .es-m-p40b {
                padding-bottom: 40px !important;
            }

            .es-m-p40r {
                padding-right: 40px !important;
            }

            .es-m-p40l {
                padding-left: 40px !important;
            }

            .es-desk-hidden {
                display: table-row !important;
                width: auto !important;
                overflow: visible !important;
                max-height: inherit !important;
            }
        }
    </style>
</head>

<body style="
      width: 100%;
      font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    ">
    <div class="es-wrapper-color" style="background-color: #d612d6">
        <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill
            type="tile"
            src="https://svrwib.stripocdn.email/content/guids/CABINET_90774a58464e7266e124c2256a717da6/images/531608808891056.png"
            color="#FFE9FF"
            origin="0.5, 0"
            position="0.5, 0"
          ></v:fill>
        </v:background>
      <![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
            background="https://svrwib.stripocdn.email/content/guids/CABINET_90774a58464e7266e124c2256a717da6/images/531608808891056.png"
            style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-image: url(https://svrwib.stripocdn.email/content/guids/CABINET_90774a58464e7266e124c2256a717da6/images/531608808891056.png);
          background-repeat: repeat-y;
          background-position: center top;
          background-color: #fff;
        ">
            <tr style="border-collapse: collapse">
                <td valign="top" style="padding: 0; margin: 0">
                    <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              ">
                        <tr style="border-collapse: collapse">
                            <td align="center" style="padding: 0; margin: 0">
                                <table class="es-header-body" align="center" cellpadding="0" cellspacing="0" style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    ">
                                    <tr style="border-collapse: collapse">
                                        <td align="left" bgcolor="#333333" style="
                          padding: 20px;
                          margin: 0;
                          background-color: #333333;
                        ">
                                            <table cellpadding="0" cellspacing="0" width="100%" style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          ">
                                                <tr style="border-collapse: collapse">
                                                    <td class="es-m-p0r" valign="top" align="center"
                                                        style="padding: 0; margin: 0; width: 560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation" style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                ">
                                                            <tr style="border-collapse: collapse">
                                                                <td align="center" style="
                                      padding: 0;
                                      margin: 0;
                                      font-size: 0px;
                                    ">
                                                                    <a target="_blank" href="http://localhost:3000"
                                                                        style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        font-size: 14px;
                                        text-decoration: none;
                                      ">
                                                                        <h1 style="color: #fff;">Flickzilla</h1>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              ">
                        <tr style="border-collapse: collapse">
                            <td align="center" style="padding: 0; margin: 0">
                                <table class="es-content-body" style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    " cellspacing="0" cellpadding="0" bgcolor="#333333" align="center">
                                    <tr style="border-collapse: collapse">
                                        <td align="left" bgcolor="#333333" style="
                          padding: 20px;
                          margin: 0;
                          background-color: #333333;
                        ">
                                            <table cellpadding="0" cellspacing="0" width="100%" style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          ">
                                                <tr style="border-collapse: collapse">
                                                    <td align="left" style="padding: 0; margin: 0; width: 560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation" style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                ">
                                                            <tr style="border-collapse: collapse">
                                                                <td align="center" style="padding: 0; margin: 0">
                                                                    <h1 style="
                                        margin: 0;
                                        line-height: 66px;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        font-size: 55px;
                                        font-style: normal;
                                        font-weight: bold;
                                        color: #fff;
                                      ">
                                                                        ${populatedMovie.title}
                                                                    </h1>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse: collapse">
                                                                <td align="center" style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 10px;
                                      font-size: 0px;
                                    "><img class="adapt-img" src="${populatedMovie.poster[0]}" alt="Poster" style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        " width="290" height="430" />
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse: collapse">
                                                                <td align="center" style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 10px;
                                    ">
                                                                    <p style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 36px;
                                        color: #fff;
                                        font-size: 24px;
                                      ">
                                                                        Dear ${user.firstName},We're excited to announce
                                                                        a new movie has been added to
                                                                        <strong
                                                                            class="    background: linear-gradient(to right, #ff0062, #c3a9ff);
                                                                        -webkit-background-clip: text;
                                                                        background-clip: text; /* Add standard background-clip property */
                                                                        -webkit-text-fill-color: transparent;">Flickzilla!</strong>
                                                                    </p>
                                                                    <br>
                                                                    <div style="color: #fff;
                                                                    font-weight: bold;
                                                                    font-style: italic;">
                                                                        <h2>Check out the details:
                                                                        </h2>
                                                                        <p>${populatedMovie.title}<br>${populatedMovie.genre}
                                                                        </p>
                                                                        <p>With actors :<br>
                                                                            ${populatedMovie.actors}
                                                                        </p>
                                                                    </div>

                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse: collapse">
                                                                <td align="center" style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 10px;
                                    ">
                                                                    <!--[if mso
                                      ]><a
                                        href="https://viewstripo.email"
                                        target="_blank"
                                        hidden
                                      >
                                        <v:roundrect
                                          xmlns:v="urn:schemas-microsoft-com:vml"
                                          xmlns:w="urn:schemas-microsoft-com:office:word"
                                          esdevVmlButton
                                          href="https://viewstripo.email"
                                          style="
                                            height: 51px;
                                            v-text-anchor: middle;
                                            width: 184px;
                                          "
                                          arcsize="50%"
                                          stroke="f"
                                          fillcolor="#4a97e9"
                                        >
                                          <w:anchorlock></w:anchorlock>
                                          <center
                                            style="
                                              color: #ffffff;
                                              font-family: helvetica,
                                                'helvetica neue', arial, verdana,
                                                sans-serif;
                                              font-size: 18px;
                                              font-weight: 700;
                                              line-height: 18px;
                                              mso-text-raise: 1px;
                                            "
                                          >
                                            VIEW ALL
                                          </center>
                                        </v:roundrect></a
                                      > <!
                                    [endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="
                                        border-style: solid;
                                        border-color: #2cb543;
                                        background: #4a97e9;
                                        border-width: 0px;
                                        display: inline-block;
                                        border-radius: 30px;
                                        width: auto;
                                        mso-hide: all;
                                      "><a href="${movieLink}" class="es-button" target="_blank" style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 18px;
                                          padding: 15px 40px 15px 40px;
                                          display: inline-block;
                                          background: linear-gradient(to right, #ff0062, #c3a9ff);
                                          border-radius: 30px;
                                          font-family: helvetica,
                                            'helvetica neue', arial, verdana,
                                            sans-serif;
                                          font-weight: bold;
                                          font-style: normal;
                                          line-height: 22px;
                                          width: auto;
                                          text-align: center;
                                          mso-padding-alt: 0;
                                          mso-border-alt: 10px solid #4a97e9;
                                        ">Get Ticket</a></span><!--<![endif]-->
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              ">
                        <tr style="border-collapse: collapse">
                            <td align="center" style="padding: 0; margin: 0">
                                <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0"
                                    cellspacing="0" style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #333333;
                      width: 600px;
                    ">
                                    <tr style="border-collapse: collapse">
                                        <td align="left" style="padding: 20px; margin: 0">
                                            <table cellpadding="0" cellspacing="0" width="100%" style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          ">
                                                <tr style="border-collapse: collapse">
                                                    <td align="center" valign="top"
                                                        style="padding: 0; margin: 0; width: 560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation" style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                ">
                                                            <tr style="border-collapse: collapse">
                                                                <td align="center" style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 5px;
                                      padding-top: 10px;
                                    ">
                                                                    <h1 style="
                                        margin: 0;
                                        line-height: 48px;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        font-size: 40px;
                                        font-style: normal;
                                        font-weight: bold;
                                        color: #fff;
                                      "> Get your ticket now<br>
                                                                        Enjoy watching!<br>
                                                                    </h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>
    `;
  };
  
  module.exports = {
    generateEmailContent
  };
  