<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
   <xsl:output method="html" indent="yes"/>

   <xsl:template match="/">
      <html>
         <body>
            <xsl:apply-templates/>
         </body>
      </html>
   </xsl:template>

   <xsl:template match="CATALOG/*">
      <table style="margin: 0 auto;" cellspacing="30">
         <xsl:for-each select="PAINTING[position() mod 4 = 1]">
            <tr>
               <xsl:for-each select=" . | following-sibling::*[position() &lt; 4]">
                  <td valign="bottom" align="center">
                     <img src="{file}"/>
                     <p>
                        <xsl:value-of select="TITLE"/>
                     </p>
                     <p>
                        <xsl:value-of select="DIMENSIONS"/>
                     </p>
                     <p>
                        <xsl:value-of select="PRICE"/>
                     </p>
                  </td>
               </xsl:for-each>
            </tr>
         </xsl:for-each>
      </table>
   </xsl:template>
</xsl:stylesheet>