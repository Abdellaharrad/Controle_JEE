package org.sid.customerservice.controller;

import org.sid.customerservice.entities.Customer;
import org.sid.customerservice.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;



    @PostMapping("/add_customer")
    public Customer addCustomer(@RequestBody Customer customer){
        return customerRepository.save(customer);
    }



    @DeleteMapping("/delete_customer/{Id}")
    public void deleteCustomer(@PathVariable("Id") Long id) {
        this.customerRepository.deleteById(id);
    }

}
