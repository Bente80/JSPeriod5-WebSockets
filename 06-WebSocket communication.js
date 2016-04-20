/**
 * Created by Bente on 19-04-2016.
 *
 * 06. Explain and demonstrate the process of WebSocket communication - From connecting client to server, through sending messages,
 *     to closing connection.
 */


/**
 * Using the Google Chrome Developer Tools, developers can inspect the WebSocket handshake as well as the WebSocket frames.[6]
*
*Example:
*
 *Client request (just like in HTTP, each line ends with \r\n and there must be an extra blank line at the end):
 */

GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com

    /**    Server response: */

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
