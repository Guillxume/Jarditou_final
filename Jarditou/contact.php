<?php
  // Regex utilisées pour le formulaire
  $isAlpha = "/^[\wÀÂÆÇÉÈÊËÏÑÎÔŒÙÛÜŸ\'’ -]+$/i";
  $isPostal = "/^\d{2}\s?\d{3}$/";
  // Tableaux vides pour stocker les erreurs et les valeurs
  $errors = [];
  $values = [];

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["nom"])) {
      $errors["nom"] = "Le nom est requis.";
    } else if (!preg_match($isAlpha, $_POST["nom"])) {
      $errors["nom"] = "Le nom n'est pas valide.";
    } else {
      $values["nom"] = sanitize_input($_POST["nom"]);
    }
    if (empty($_POST["prénom"])) {
      $errors["prenom"] = "Le prénom est requis.";
    } else if (!preg_match($isAlpha, $_POST["prénom"])) {
      $errors["prenom"] = "Le prénom n'est pas valide.";
    } else {
      $values["prenom"] = sanitize_input($_POST["prénom"]);
    }
    if (empty($_POST["email"])) {
      $errors["email"] = "L'email est requis.";
    } else if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
      $errors["email"] = "L'email n'est pas valide.";
    } else {
      $values["email"] = sanitize_input($_POST["email"]);
    }
    if (!preg_match($isPostal, $_POST["postal"])) {
      $errors["postal"] = "Le code postal n'est pas valide.";
    } else {
      $values["postal"] = sanitize_input($_POST["postal"]);
    }
    if (!preg_match($isAlpha, $_POST["adresse"])) {
      $errors["adresse"] = "L'adresse n'est pas valide.";
    } else {
      $values["adresse"] = sanitize_input($_POST["adresse"]);
    }
    if (!preg_match($isAlpha, $_POST["ville"])) {
      $errors["ville"] = "La ville n'est pas valide.";
    } else {
      $values["ville"] = sanitize_input($_POST["ville"]);
    }
    if (!empty($_POST["sexe"])) {
      $values["sexe"] = sanitize_input($_POST["sexe"]);
    }
    if (!empty($_POST["date"])) {
      $values["date"] = sanitize_input($_POST["date"]);
    }
    if (!empty($_POST["sujet"])) {
      $values["sujet"] = sanitize_input($_POST["sujet"]);
    }
    if (!empty($_POST["question"])) {
      $values["question"] = sanitize_input($_POST["question"]);
    }
    if (!empty($_POST["cgu"])) {
      $values["cgu"] = sanitize_input($_POST["cgu"]);
    }
  }

      foreach($values as $key => $value) {
        echo "<p>Champ: $key</p>";
        echo "<p>Valeur: $value</p>";
        echo "<hr>";
      }
    ?>