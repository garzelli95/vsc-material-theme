import java.util.ArrayList;

public class Factorial extends Foo implements SomeInterface {

    public static String foo = "somestring";
    private static final int bar = 521;
    private int baz = 5;

    public Factorial() {
        
    }

    public void foo(int parameter) {
        this.baz *= parameter
    }

    public static void main(String[] args) {
        int num = 10;
        long factorial = 1;

        for (int i = 1; i <= num; ++i) {
            factorial = factorial * i;
        }

        System.out.printf("Factorial of %d = %d", num, factorial);
    }

    public static void writeToFile() throws IOException {
        BufferedWriter bw = null
        bw = new BufferedWriter(new FileWriter("myFile.txt"));
        bw.write("Test");
        bw.close();
    }

    private void trycatch() {
        try {
            int[] array = new int[5];
            array[10] = 10;
        } catch (IndexOutOfBoundsException e) {
            System.out.println("Indice fuori dai limiti dell'array!");
            e.printStackTrace();
        } finally {
            System.out.println("Fine del blocco try-catch");
        }

    }

    public static void arrayList(String[] args) {
        List<String> lista = new ArrayList<>();

        lista.add("elemento 1");
        lista.add("elemento 2");
        lista.add("elemento 3");
        lista.add("elemento 4");
        lista.remove(1);

        String elemento = lista.get(2);
        boolean presente = lista.contains("elemento 3");
        int dimensione = lista.size();
        boolean vuota = lista.isEmpty();
        
    }
}

public interface Printable {
    public void print();
}
