import java.util.Collection;

public class Exercice {
    public int findLargest(int[] numbers) {
        int largest = numbers[0];
        for (int i=1; i<numbers.length;i++) {
            if (numbers[i] > largest) {
                largest = numbers[i];
            }
        }
        return largest;
    }

    public  void afficheList(int[] numbers, Collection<Integer> list) {
        for (int number : numbers) {
            list.add(number);
        }
    }

    public void afficheList(Collection<Integer> list) {
        for (Integer number : list) {
            System.out.print(number + " ");
        }
        System.out.println();
    }
    public void removeElementByValue(Collection<Integer> list, int value) {
        for (Integer number : list) {
            if (number == value) {
                list.remove(number);
                break;
            }
        }
    }
}

