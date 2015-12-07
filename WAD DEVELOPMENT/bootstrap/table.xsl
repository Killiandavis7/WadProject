<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>Articles</h2>
  
  <table margin="0 auto" align="center" valign="bottom">
 
    
    
    <tr>
    <xsl:for-each select="news/articles">
      
      <td width="250px" height="250px" align="center" valign="centre">
      <h2><xsl:value-of select="title"/></h2>
      
   
      <img src="{file}" height="150px" width="200"/>
    
      <p><xsl:value-of select="description"/></p>
      </td>
      
      
    </xsl:for-each>
    </tr>
    
    
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>