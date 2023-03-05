#!/bin/bash

set -e

# dichiarazione e assegnazione di una variabile
nome='Mario'
nome=Luigi

# utilizzo di un comando comune
echo "Ciao, $nome! Questo è uno script Bash."

# commands with subcommands
terraform init
terraform fmt -check
gcloud compute instances list --project='my_project_id'
gcloud compute instances describe $MY_VM --zone $MY_ZONE
gcloud compute instances describe instance-1 --zone europe-west4-a
gcloud compute instances describe 'instance-1' --zone 'europe-west4-a'
gcloud compute \
    instances \
    describe \
    'instance-1' \
    --zone 'europe-west4-a'

# Definizione della funzione
my_function() {
  # Dichiarazione delle variabili locali
  local arg1=$1
  local arg2=$2
  local result

  # Operazioni sulla funzione
  result=$((arg1 + arg2))

  # Output del risultato
  echo "Il risultato della somma di $arg1 e $arg2 è $result"
}

# Chiamata alla funzione
num=30
my_function 10 $num
res=$(my_function 2 2)

# utilizzo di una struttura if/else
if [ "$nome" == "Mario" ]; then
  echo "Il nome è Mario."
else
  echo "Il nome non è Mario."
fi

# utilizzo di una struttura for loop
for i in {1..5}; do
  echo "Iterazione $i"
done

for i in 1 2 3 4 5
do
  echo "Valore: $i"
done

# Ciclo for per stampare i numeri da 1 a 5 con seq
for i in $(seq 1 5)
do
  echo "Numero: $i"
done


for file in *
do
  echo "File: $file"
done

for file in $(ls | grep -v ".txt")
do
  echo "File: $file"
done

for ((i=0; i<5; i++))
do
  echo "Iterazione: $i"
done

# Dichiarazione dell'array
frutta=("mela" "banana" "arancia" "kiwi")
for frutto in "${frutta[@]}"
do
  echo "Frutto: $frutto"
done



# utilizzo di una struttura while loop
x=1
while [ $x -le 5 ]; do
  echo "while loop: iterazione $x"
  x=$((x+1))
done

# utilizzo di una struttura select
opzioni=("Opzione 1" "Opzione 2" "Opzione 3" "Esci")
select scelta in "${opzioni[@]}"; do
  case $scelta in
    "Opzione 1")
      echo "Hai scelto l'opzione 1."
      ;;
    "Opzione 2")
      echo "Hai scelto l'opzione 2."
      ;;
    "Opzione 3")
      echo "Hai scelto l'opzione 3."
      ;;
    "Esci")
      echo "Hai scelto di uscire."
      break
      ;;
    *)
      echo "Scelta non valida. Riprova."
      ;;
  esac
done

# utilizzo del comando read per acquisire l'input dell'utente
echo "Inserisci il tuo nome:"
read nome_utente
echo "Ciao, $nome_utente!"
echo -e "Stringa con\tescape\n"

# utilizzo di comandi
echo "Informazioni sulla connessione di rete:"
ifconfig
ls -al

# special variables
ec=$?
all=$@
echo "PID: $$"

# redirezione e pipe
ls /usr/bin > lista.txt
cat non_esiste.txt 2> errori.txt
ls /usr/bin > output.txt 2>&1
ls /usr/bin | grep "^a"
ls /usr/bin | grep tobefound
