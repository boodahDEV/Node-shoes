/**
 * @author boodahDEV <https://github.com/boodahDEV>
 * @version 1.0
 */

const nodemailer = require("nodemailer");

/**
 * @param { JSON } jsonConfig 
 * @param { Array } mailsArray Bloque de correos enpaquetados en un arreglo
 * @param { String } subject  Asunto del correo
 * @param { String } plainTextMessage Texto bruto del mensaje
 * @param { String } htmlTextMessaje formato HTML del mensaje
 */


function sendEmail(
  { hostName, firstName, lastName, hostUserName, hostPass },
  mailsArray,
  subject,
  plainTextMessage,
  htmlTextMessaje
) {
  return new Promise(async function(resolve, reject) {
    const transporter = nodemailer.createTransport({
      host: "smtp." + hostName,
      port: 465, //puerto seguro, en caso de pruebas usar 587 y secure: false
      segure: true,
      auth: {
        user: hostUserName,
        pass: hostPass
      }
    });
    for (const mail of mailsArray) {
      await transporter
        .sendMail({
          from: `${firstName} ${lastName} <${hostUserName}>`, // sender address
          to: mail, // list of receivers
          subject: subject, // Subject line
          text: plainTextMessage, // plain text body
          html: htmlTextMessaje // html body
        })
        .then(res => {
          resolve({
            message: "Messages sent successfully.",
            log: {
              response: res.response,
              envelope: res.envelope,
              messageId: res.messageId
            }
          });
        })
        .catch(err => {
          if (err)
            reject({
              message:
                "Error during shipment, messages were not sent successfully.",
              log: err
            });
        }); //end catch
    } //end for
  }); //promise
} //end function sendEmail

exports.sendEmail = sendEmail;
