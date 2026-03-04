<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <table border="1">
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                    <xsl:for-each select="productos/producto">
                        <tr>
                            <td><xsl:value-of select="."/></td>
                            <td><xsl:value-of select="@precio"/></td>
                        </tr>
                    </xsl:for-each>
                    <!-- Aquí se agregarán las filas de la tabla -->
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>    

<!-- **Enunciado:** Crea una tabla HTML con dos columnas: Nombre y Precio. -->