"use strict";

$(document).ready(function () {
	$(".gallery-view-container").lightGallery({
		subHtmlSelectorRelative: true,
		closable: false,
		thumbnail: true,
	});
	// Admission notice Table

	$("#admission__notice__table").DataTable({
		scrollX: true,
	});
	//Result Table

	$("#result__notice__table").DataTable({
		scrollX: true,
	});

	$("#new_notification_table").DataTable({
		scrollX: true,
	});


	$("#training_calaaner_table").DataTable({
		scrollX: true,
	});

	$("#vacancy_table").DataTable({
		scrollX: true,
	});

	$("#gr_listing").DataTable({
		scrollX: true,
	});


	$("#archve_table").DataTable({
		scrollX: true,
	});

	// Upload

	$("#contact_form").on("submit", (e) => {
		e.preventDefault();
		let user_name = document.getElementById("user_name").value;
		let user_mobile_number =
			document.getElementById("user_mobile_number").value;
		let user_email = document.getElementById("user_email").value;
		let contact_subject = document.getElementById("contact_subject").value;
		let user_message = document.getElementById("user_message").value;
		let error = 0;

		if (user_name == "") {
			document.getElementById("user_name_error").innerHTML =
				"This field is required";
			error++;
		} else {
			document.getElementById("user_name_error").innerHTML = "";
		}

		if (user_mobile_number == "") {
			document.getElementById("user_mobile_number_error").innerHTML =
				"This field is required";
			error++;
		} else if (
			user_mobile_number.length > 10 ||
			user_mobile_number.length < 10
		) {
			document.getElementById("user_mobile_number_error").innerHTML =
				"Invalid mobile number";
		} else {
			document.getElementById("user_mobile_number_error").innerHTML = "";
		}

		if (user_email == "") {
			document.getElementById("user_email_error").innerHTML =
				"This field is required";
			error++;
		} else {
			document.getElementById("user_email_error").innerHTML = "";
		}

		if (contact_subject == "") {
			document.getElementById("contact_subject_error").innerHTML =
				"This field is required";
			error++;
		} else {
			document.getElementById("contact_subject_error").innerHTML = "";
		}

		if (user_message == "") {
			document.getElementById("user_message_error").innerHTML =
				"This field is required";
			error++;
		} else {
			document.getElementById("user_message_error").innerHTML = "";
		}

		if (error != 0) {
			return false;
		} else {
			$("#connect_button").attr("disabled", true);
			$("#connect_button").html(
				'<i class="fa fa-spinner fa-spin 5x"></i> Please Wait'
			);
			$.ajax({
				type: "POST",
				url: base_url + "Website/add_contact_form_data",
				data: new FormData(document.getElementById("contact_form")),
				cache: false,
				processData: false,
				contentType: false,
				success: function (response) {
					if (response === "success") {
						swal(
							{
								title: "Success",
								text: "Thanks for connecting with us, we will respond you soon...",
								type: "success",
							},
							function () {
								location.reload();
							}
						);
					} else {
						swal(
							{
								title: "Error",
								text: "something wents wrong, please try again later!",
								type: "error",
							},
							function () {
								location.reload();
							}
						);
					}
				},
				error: () => {
					swal(
						{
							title: "Error",
							text: "something wents wrong, please try again later!",
							type: "error",
						},
						function () {
							location.reload();
						}
					);
				},
			});
		}
	});

	// Upload Ends

	// Feedback form

	$('#feedback_form').on("submit", (e) => {
		e.preventDefault();
		let user_name = document.getElementById("user_name_feed").value;
		let user_mobile_number =
			document.getElementById("user_mobile_number_feed").value;
		let user_email = document.getElementById("user_email_feed").value;
		let user_message = document.getElementById("feedbacks_users").value;
		let error = 0;

		if (user_name == "") {
			document.getElementById("user_name_feed_error").innerHTML =
				"This field is required";
			error++;
		} else {
			document.getElementById("user_name_feed_error").innerHTML = "";
		}

		if (user_mobile_number == "") {
			document.getElementById("user_mobile_number_feed_error").innerHTML =
				"This field is required";
			error++;
		} else if (
			user_mobile_number.length > 10 ||
			user_mobile_number.length < 10
		) {
			document.getElementById("user_mobile_number_feed_error").innerHTML =
				"Invalid mobile number";
		} else {
			document.getElementById("user_mobile_number_feed_error").innerHTML = "";
		}

		if (user_email == "") {
			document.getElementById("user_email_feed_error").innerHTML =
				"This field is required";
			error++;
		} else {
			document.getElementById("user_email_feed_error").innerHTML = "";
		}


		if (user_message == "") {
			document.getElementById("feedbacks_users_error").innerHTML =
				"This field is required";
			error++;
		} else {
			document.getElementById("feedbacks_users_error").innerHTML = "";
		}

		if (error != 0) {
			return false;
		} else {
			$("#feedback_button").attr("disabled", true);
			$("#feedback_button").html(
				'<i class="fa fa-spinner fa-spin 5x"></i> Please Wait'
			);
			$.ajax({
				type: "POST",
				url: base_url + "Website/add_feedback_form_data",
				data: new FormData(document.getElementById("feedback_form")),
				cache: false,
				processData: false,
				contentType: false,
				success: function (response) {
					if (response === "success") {
						swal(
							{
								title: "Success",
								text: "Thanks for submitting your valuable feedback...",
								type: "success",
							},
							function () {
								location.reload();
							}
						);
					} else {
						swal(
							{
								title: "Error",
								text: "something wents wrong, please try again later!",
								type: "error",
							},
							function () {
								location.reload();
							}
						);
					}
				},
				error: () => {
					swal(
						{
							title: "Error",
							text: "something wents wrong, please try again later!",
							type: "error",
						},
						function () {
							location.reload();
						}
					);
				},
			});
		}
	});

	// Feedback form Ends

	//Events Sliders

	$(".events-sliders").slick({
		centerMode: true,
		centerPadding: "60px",
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow:
			'<button class="slide-arrow slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow:
			'<button class="slide-arrow slick-next"><i class="fas fa-chevron-right"></i></button>',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
		],
	});

	//Events Sliders Ends

	// Apply now Form tube

	$("#apply_now_form").on("submit", (e) => {
		e.preventDefault();
		let user_name = document.getElementById("user_name").value;
		let user_mobile_number =
			document.getElementById("user_mobile_number").value;
		let user_email = document.getElementById("user_email").value;
		let date_of_brith = document.getElementById("date_of_brith").value;
		let course_applied_for = document.getElementById("course_applied_for").value;
		let error = 0;

		if (user_name == "") {
			document.getElementById("user_name_error").innerHTML =
				"This field is required";
			error++;
		} else {
			document.getElementById("user_name_error").innerHTML = "";
		}

		if (user_mobile_number == "") {
			document.getElementById("user_mobile_number_error").innerHTML =
				"This field is required";
			error++;
		} else if (
			user_mobile_number.length > 10 ||
			user_mobile_number.length < 10
		) {
			document.getElementById("user_mobile_number_error").innerHTML =
				"Invalid mobile number";
		} else {
			document.getElementById("user_mobile_number_error").innerHTML = "";
		}

		if (user_email == "") {
			document.getElementById("user_email_error").innerHTML =
				"This field is required";
			error++;
		} else {
			document.getElementById("user_email_error").innerHTML = "";
		}

		if (date_of_brith == "") {
			document.getElementById("date_of_brith_error").innerHTML =
				"This field is required";
			error++;
		} else {
			document.getElementById("date_of_brith_error").innerHTML = "";
		}

		if (course_applied_for == "") {
			document.getElementById("course_applied_for_error").innerHTML =
				"This field is required";
			error++;
		} else {
			document.getElementById("course_applied_for_error").innerHTML = "";
		}

		if (error != 0) {
			return false;
		} else {
			$("#apply_now_button").attr("disabled", true);
			$("#apply_now_button").html(
				'<i class="fa fa-spinner fa-spin 5x"></i> Please Wait'
			);
			$.ajax({
				type: "POST",
				url: base_url + "Website/apply_now_form_data",
				data: new FormData(document.getElementById("apply_now_form")),
				cache: false,
				processData: false,
				contentType: false,
				success: function (response) {
					if (response === "success") {
						swal(
							{
								title: "Success",
								text: "Thanks for connecting with us, we will respond you soon...",
								type: "success",
							},
							function () {
								location.reload();
							}
						);
					} else {
						swal(
							{
								title: "Error",
								text: "something wents wrong, please try again later!",
								type: "error",
							},
							function () {
								location.reload();
							}
						);
					}
				},
				error: () => {
					swal(
						{
							title: "Error",
							text: "something wents wrong, please try again later!",
							type: "error",
						},
						function () {
							location.reload();
						}
					);
				},
			});
		}
	});

	// Apply now Form Ends

	// document ready Ends
});

// Check Internet Connection
window.addEventListener("offline", function (e) {
	swal({
		title: "Offline",
		text: "You are not conneted to internet..!",
		showCancelButton: false,
		showConfirmButton: false,
		closeOnClickOutside: false,
	});
});

window.addEventListener("online", function (e) {
	swal({
		title: "Back online",
		text: "Connecting please wait....!",
		showCancelButton: false,
		showConfirmButton: false,
		closeOnClickOutside: false,
	});
	location.reload();
});
// Check Internet Connection

// Fixed Navbar Ends

window.addEventListener("load", () => {
	const loader = document.querySelector("#loader");
	if (loader) {
		let mainBody = document.querySelector(".main__container");
		loader.style.display = "none";
		mainBody.classList.remove("d-none");
	}
	// Intilizing AOS
	//   AOS.init({
	//     duration: 800,
	//   });

	// Intilizing AOS

	//   console.clear();

	// Get Client IP Address

	$.get(
		"https://ipinfo.io",
		function (response) {
			let ip_address = response.ip;
			$.ajax({
				type: "POST",
				url: base_url + "Website/save_information",
				data: {
					csrf_test_name: csrf_hash,
					ip_address: ip_address,
				},
				success: function (response) {
					var data = JSON.parse(response);
					$("#visitor_count").html(Number(1421886 + parseInt(data)));
				},
			});
		},
		"json"
	);

	// Get Client IP Address Ends

	//Disbale behaviour on click

	if ($(window).width() < 1200) {
		// for Course menu
		$(".on_mobile_disabled").click((e) => {
			e.preventDefault();
			$(".dropdown__container").toggle();
		});
	}

	//Disbale behaviour on click ENds
});

//ON Load js Ends

const showHideNavigation = document.querySelector(".hamburger");
if (showHideNavigation) {
	showHideNavigation.addEventListener("click", () => {
		$(".navigation__section").toggle();
	});
}
