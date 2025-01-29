<?php
// Ajouter l'en-tête CORS pour autoriser les requêtes venant de localhost:3000
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Chemin vers le fichier PHP pour l'envoi de l'email

// Récupérer les données du formulaire envoyé
$name = $_POST['name'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$message = $_POST['message'];

// Le message de l'email
$msg = "Nom: $name\nEmail: $email\nTéléphone: $telephone\nMessage: $message";

// Utiliser wordwrap() pour couper le message si nécessaire
$msg = wordwrap($msg, 70);

// Envoyer l'email
$to = "ketoutou1@gmail.com";
$subject = "Message du formulaire de contact du site web";
$headers = "From: $email";

// Fonction mail() pour envoyer l'email
if(mail($to, $subject, $msg, $headers)) {
    echo "Email envoyé avec succès!";
} else {
    echo "Erreur lors de l'envoi de l'email.";
}
?>
