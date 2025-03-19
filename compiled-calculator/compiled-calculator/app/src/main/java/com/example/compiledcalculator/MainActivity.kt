package com.example.compiledcalculator

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.compiledcalculator.ui.theme.CompiledCalculatorTheme
import kotlin.math.roundToInt

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            CompiledCalculatorTheme {
                CalculatorScreen()
            }
        }
    }
}

@Composable
fun CalculatorScreen() {
    var input by remember { mutableStateOf("0") }
    var output by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Display
        Text(
            text = output.ifEmpty { input },
            fontSize = 48.sp,
            fontWeight = FontWeight.Bold,
            modifier = Modifier.fillMaxWidth(),
            color = Color.Black
        )
        Spacer(modifier = Modifier.height(16.dp))
        // Buttons
        val buttons = listOf(
            listOf("7", "8", "9", "/"),
            listOf("4", "5", "6", "*"),
            listOf("1", "2", "3", "-"),
            listOf("0", ".", "=", "+"),
            listOf("C")
        )

        buttons.forEach { row ->
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                row.forEach { label ->
                    CalculatorButton(label) {
                        when (label) {
                            "C" -> {
                                input = "0"
                                output = ""
                            }
                            "=" -> {
                                try {
                                    output = evaluateExpression(input)
                                    input = output
                                } catch (e: Exception) {
                                    output = "Error"
                                }
                            }
                            else -> {
                                if (input == "0" && label != ".") input = ""
                                input += label
                            }
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun CalculatorButton(label: String, onClick: () -> Unit) {
    Box(
        modifier = Modifier
            .size(80.dp)
            .background(Color.Gray, shape = RoundedCornerShape(8.dp))
            .clickable { onClick() },
        contentAlignment = Alignment.Center
    ) {
        Text(text = label, fontSize = 32.sp, color = Color.White)
    }
}

fun evaluateExpression(expression: String): String {
    return try {
        val result = expression.toDouble()
        if (result == result.roundToInt().toDouble()) result.roundToInt().toString() else result.toString()
    } catch (e: Exception) {
        "Error"
    }
}
