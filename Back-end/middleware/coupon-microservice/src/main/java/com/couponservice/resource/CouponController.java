package com.couponservice.resource;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.couponservice.entity.Coupon;
import com.couponservice.service.CouponService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/coupon")
public class CouponController {
	
	@Autowired
	CouponService couponService;

	
	//to add a coupon
	@PostMapping("/add")
	public Coupon addCoupon(@RequestBody Coupon deal) {
		Coupon coupon = couponService.save(deal);
		return coupon;
	}

	//find coupon by id
	@GetMapping("/find/id/{couponId}")
	public Optional<Coupon> searchCouponByCouponId(@PathVariable("couponId") String couponId) {
		Optional<Coupon> coupon = couponService.findByCouponId(couponId);
		return coupon;
	}
	
	
	
	

	//delete by coupon id
	@DeleteMapping("/delete/id/{couponId}")
	public String deleteCouponBycouponId(@PathVariable("couponId") String couponId) {
		String result = couponService.deleteById(couponId);
		return result;
	}
	
	
	
	

	//to get all the coupon
	@GetMapping("/findall")
	public List<Coupon> findCoupon() {
		return (List<Coupon>) couponService.findAll();
	}

	
	//to update by id
	@PutMapping("/update/id/{id}")
	public Coupon updateCoupon(@RequestBody Coupon deal) {
		Coupon coupon = couponService.save(deal);
		return coupon;
	}
}
