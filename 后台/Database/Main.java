package com.chinacreator.dblog.neo4j;

import org.neo4j.driver.AuthTokens;
import org.neo4j.driver.Driver;
import org.neo4j.driver.GraphDatabase;
import org.neo4j.driver.Result;
import org.neo4j.driver.Session;
import org.neo4j.driver.Transaction;
import org.neo4j.driver.TransactionWork;
import static org.neo4j.driver.Values.parameters;
public class Main implements AutoCloseable{

    private final Driver driver;

    public Main( String uri, String user, String password) {
    	driver = GraphDatabase.driver(uri, AuthTokens.basic( user, password ));
    }
    
    public void printGreeting( final String message )
    {
        try ( Session session = driver.session() )
        {
        	
            String greeting = session.writeTransaction( new TT(message));
            System.out.println( greeting );
        }
    }
    
    public class TT implements TransactionWork {

    	private String message;
    	
    	public TT(String message) {
    		this.message = message;
    	}
    	
		@Override
		public String execute(Transaction tx) {
			// TODO Auto-generated method stub
			Result result = tx.run( "match (a:Greeting) " +
                    
                    "RETURN a.message + ', from node ' + id(a)" );
			
		return result.list().get(0).get(0).asString();
		}
    	
    }
    
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
			Main greeter = new Main( "bolt://172.16.17.108:7687", "neo4j", "123456" );
			greeter.printGreeting( "hello, world" );
	}

	@Override
	public void close() throws Exception {
		// TODO Auto-generated method stub
		 driver.close();
	}

}
