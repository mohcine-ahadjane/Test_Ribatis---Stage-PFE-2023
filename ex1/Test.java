import java.util.ArrayList;
import java.util.List;

public class Test {
    public static void main(String[] args) {
        Exercice exercice= new Exercice();
        int[] numbers = {3,19,5,8,15,6,11,18};

        // Trouver le plus grand nombre dans numbers
        int largest = exercice.findLargest(numbers);
        System.out.println("Le plus grand nombre est : " + largest);

        // Ajouter les nombres dans une liste de type collection
        List<Integer> list = new ArrayList<>();
        exercice.afficheList(numbers, list);

        // Parcourir et afficher le contenu de la liste
        exercice.afficheList(list);

        // Supprimer un élément dans la liste recherché par une valeur
        exercice.removeElementByValue(list, 11);
        System.out.println("Après suppression : ");
        exercice.afficheList(list);
    }
}
