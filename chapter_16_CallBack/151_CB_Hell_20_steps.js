// Real QA Scenario: End-to-End E-Commerce Checkout & Order Fulfillment Flow
// Demonstrating CALLBACK HELL (Pyramid of Doom) with ~20 nested async operations
// Each step simulates a real Playwright/Selenium automation or API callback


function launchBrowser(callback) {
    console.log("Step 1: Launching Chrome Browser");
    setTimeout(function () {
        callback(null, "chrome");
    }, 500);
}

function navigateToHome(browser, callback) {
    console.log("Step 2: Navigating to E-Commerce Home Page");
    setTimeout(function () {
        callback(null, browser);
    }, 1000);
}

function acceptCookieBanner(browser, callback) {
    console.log("Step 3: Accepting Cookie Consent Banner");
    setTimeout(function () {
        callback(null, browser);
    }, 300);
}

function loginWithCredentials(browser, callback) {
    console.log("Step 4: Entering Username and Password");
    setTimeout(function () {
        callback(null, { browser: browser, userId: "user_12345" });
    }, 1500);
}

function verifyLoginSuccess(session, callback) {
    console.log("Step 5: Verifying Dashboard is Visible after Login");
    setTimeout(function () {
        callback(null, session);
    }, 800);
}

function fetchUserProfile(session, callback) {
    console.log("Step 6: Fetching User Profile from API");
    setTimeout(function () {
        session.profile = { name: "QA Engineer", tier: "premium" };
        callback(null, session);
    }, 600);
}

function validateUserTier(session, callback) {
    console.log("Step 7: Validating User Subscription Tier");
    setTimeout(function () {
        if (session.profile.tier !== "premium") {
            return callback(new Error("User is not premium"));
        }
        callback(null, session);
    }, 400);
}

function searchForProduct(session, callback) {
    console.log("Step 8: Searching for Product 'Playwright Course'");
    setTimeout(function () {
        session.productId = "PROD-999";
        callback(null, session);
    }, 1200);
}

function selectProductFromList(session, callback) {
    console.log("Step 9: Selecting Product from Search Results");
    setTimeout(function () {
        callback(null, session);
    }, 500);
}

function verifyProductDetailsPage(session, callback) {
    console.log("Step 10: Verifying Product Details Page Loaded");
    setTimeout(function () {
        callback(null, session);
    }, 700);
}

function addProductToCart(session, callback) {
    console.log("Step 11: Adding Product to Shopping Cart");
    setTimeout(function () {
        session.cartId = "CART-888";
        callback(null, session);
    }, 900);
}

function verifyCartCountUpdated(session, callback) {
    console.log("Step 12: Verifying Cart Badge Count Updated");
    setTimeout(function () {
        callback(null, session);
    }, 300);
}

function applyDiscountCoupon(session, callback) {
    console.log("Step 13: Applying Discount Coupon 'QA20'");
    setTimeout(function () {
        session.discountApplied = true;
        callback(null, session);
    }, 800);
}

function validateDiscountCalculation(session, callback) {
    console.log("Step 14: Validating Discount Calculation in Cart Total");
    setTimeout(function () {
        callback(null, session);
    }, 400);
}

function proceedToCheckout(session, callback) {
    console.log("Step 15: Clicking Proceed to Checkout");
    setTimeout(function () {
        callback(null, session);
    }, 1000);
}

function selectShippingAddress(session, callback) {
    console.log("Step 16: Selecting Default Shipping Address");
    setTimeout(function () {
        session.addressId = "ADDR-555";
        callback(null, session);
    }, 600);
}

function validateShippingCost(session, callback) {
    console.log("Step 17: Validating Shipping Cost for Selected Address");
    setTimeout(function () {
        callback(null, session);
    }, 500);
}

function selectPaymentMethod(session, callback) {
    console.log("Step 18: Selecting Credit Card Payment Method");
    setTimeout(function () {
        session.paymentMethod = "credit_card";
        callback(null, session);
    }, 700);
}

function enterPaymentDetails(session, callback) {
    console.log("Step 19: Entering Credit Card Details (Mock)");
    setTimeout(function () {
        callback(null, session);
    }, 1000);
}

function placeOrder(session, callback) {
    console.log("Step 20: Placing the Order");
    setTimeout(function () {
        session.orderId = "ORD-777777";
        callback(null, session);
    }, 1500);
}

function verifyOrderConfirmation(session, callback) {
    console.log("Step 21: Verifying Order Confirmation Page");
    setTimeout(function () {
        callback(null, session);
    }, 800);
}

function sendOrderConfirmationEmail(session, callback) {
    console.log("Step 22: Triggering Order Confirmation Email");
    setTimeout(function () {
        console.log("Email sent to user for order: " + session.orderId);
        callback(null, session);
    }, 500);
}

function logoutUser(session, callback) {
    console.log("Step 23: Logging Out User");
    setTimeout(function () {
        console.log("User logged out successfully");
        callback(null, "done");
    }, 600);
}

function closeBrowser(status, callback) {
    console.log("Step 24: Closing Browser");
    setTimeout(function () {
        console.log("Browser closed");
        callback(null, "test_passed");
    }, 300);
}

// ============================================================
// THE CALLBACK HELL / PYRAMID OF DOOM
// ============================================================
// Notice how each success callback nests deeper, creating a
// rightward drift and pyramid shape. Error handling is duplicated
// at every level. This is unmaintainable with 20+ operations.
// ============================================================

launchBrowser(function (err1, browser) {
    if (err1) { console.error("Step 1 failed:", err1); return; }
    navigateToHome(browser, function (err2, browser2) {
        if (err2) { console.error("Step 2 failed:", err2); return; }
        acceptCookieBanner(browser2, function (err3, browser3) {
            if (err3) { console.error("Step 3 failed:", err3); return; }
            loginWithCredentials(browser3, function (err4, session1) {
                if (err4) { console.error("Step 4 failed:", err4); return; }
                verifyLoginSuccess(session1, function (err5, session2) {
                    if (err5) { console.error("Step 5 failed:", err5); return; }
                    fetchUserProfile(session2, function (err6, session3) {
                        if (err6) { console.error("Step 6 failed:", err6); return; }
                        validateUserTier(session3, function (err7, session4) {
                            if (err7) { console.error("Step 7 failed:", err7); return; }
                            searchForProduct(session4, function (err8, session5) {
                                if (err8) { console.error("Step 8 failed:", err8); return; }
                                selectProductFromList(session5, function (err9, session6) {
                                    if (err9) { console.error("Step 9 failed:", err9); return; }
                                    verifyProductDetailsPage(session6, function (err10, session7) {
                                        if (err10) { console.error("Step 10 failed:", err10); return; }
                                        addProductToCart(session7, function (err11, session8) {
                                            if (err11) { console.error("Step 11 failed:", err11); return; }
                                            verifyCartCountUpdated(session8, function (err12, session9) {
                                                if (err12) { console.error("Step 12 failed:", err12); return; }
                                                applyDiscountCoupon(session9, function (err13, session10) {
                                                    if (err13) { console.error("Step 13 failed:", err13); return; }
                                                    validateDiscountCalculation(session10, function (err14, session11) {
                                                        if (err14) { console.error("Step 14 failed:", err14); return; }
                                                        proceedToCheckout(session11, function (err15, session12) {
                                                            if (err15) { console.error("Step 15 failed:", err15); return; }
                                                            selectShippingAddress(session12, function (err16, session13) {
                                                                if (err16) { console.error("Step 16 failed:", err16); return; }
                                                                validateShippingCost(session13, function (err17, session14) {
                                                                    if (err17) { console.error("Step 17 failed:", err17); return; }
                                                                    selectPaymentMethod(session14, function (err18, session15) {
                                                                        if (err18) { console.error("Step 18 failed:", err18); return; }
                                                                        enterPaymentDetails(session15, function (err19, session16) {
                                                                            if (err19) { console.error("Step 19 failed:", err19); return; }
                                                                            placeOrder(session16, function (err20, session17) {
                                                                                if (err20) { console.error("Step 20 failed:", err20); return; }
                                                                                verifyOrderConfirmation(session17, function (err21, session18) {
                                                                                    if (err21) { console.error("Step 21 failed:", err21); return; }
                                                                                    sendOrderConfirmationEmail(session18, function (err22, session19) {
                                                                                        if (err22) { console.error("Step 22 failed:", err22); return; }
                                                                                        logoutUser(session19, function (err23, status1) {
                                                                                            if (err23) { console.error("Step 23 failed:", err23); return; }
                                                                                            closeBrowser(status1, function (err24, finalStatus) {
                                                                                                if (err24) { console.error("Step 24 failed:", err24); return; }
                                                                                                console.log("========================================");
                                                                                                console.log("END-TO-END TEST COMPLETED SUCCESSFULLY!");
                                                                                                console.log("Final Status: " + finalStatus);
                                                                                                console.log("========================================");
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});