from pydantic import BaseModel, EmailStr, Field
from typing import Optional

# 1. SIGNUP MODEL (Frontend से जो डेटा आएगा)
class UserCreate(BaseModel):
    full_name: str = Field(..., min_length=2, description="User's full name")
    email: EmailStr = Field(..., description="Valid email address")
    password: str = Field(..., min_length=6, description="Password must be at least 6 characters")

# 2. LOGIN MODEL (Login करते वक्त जो डेटा चाहिए)
class UserLogin(BaseModel):
    email: EmailStr
    password: str

# 3. USER RESPONSE MODEL (User को वापस भेजने के लिए - Optional)
# इसका इस्तेमाल हम तब करते हैं जब हम पासवर्ड वगैरह छिपाकर डेटा भेजना चाहें
class UserResponse(BaseModel):
    id: str
    full_name: str
    email: EmailStr

    class Config:
        from_attributes = True