// Generated from java.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by javaParser.
function javaListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

javaListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
javaListener.prototype.constructor = javaListener;

// Enter a parse tree produced by javaParser#compilationUnit.
javaListener.prototype.enterCompilationUnit = function(ctx) {
};

// Exit a parse tree produced by javaParser#compilationUnit.
javaListener.prototype.exitCompilationUnit = function(ctx) {
};


// Enter a parse tree produced by javaParser#packageDeclaration.
javaListener.prototype.enterPackageDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#packageDeclaration.
javaListener.prototype.exitPackageDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#importDeclaration.
javaListener.prototype.enterImportDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#importDeclaration.
javaListener.prototype.exitImportDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#typeDeclaration.
javaListener.prototype.enterTypeDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#typeDeclaration.
javaListener.prototype.exitTypeDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#modifier.
javaListener.prototype.enterModifier = function(ctx) {
};

// Exit a parse tree produced by javaParser#modifier.
javaListener.prototype.exitModifier = function(ctx) {
};


// Enter a parse tree produced by javaParser#classOrInterfaceModifier.
javaListener.prototype.enterClassOrInterfaceModifier = function(ctx) {
};

// Exit a parse tree produced by javaParser#classOrInterfaceModifier.
javaListener.prototype.exitClassOrInterfaceModifier = function(ctx) {
};


// Enter a parse tree produced by javaParser#variableModifier.
javaListener.prototype.enterVariableModifier = function(ctx) {
};

// Exit a parse tree produced by javaParser#variableModifier.
javaListener.prototype.exitVariableModifier = function(ctx) {
};


// Enter a parse tree produced by javaParser#classDeclaration.
javaListener.prototype.enterClassDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#classDeclaration.
javaListener.prototype.exitClassDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#typeParameters.
javaListener.prototype.enterTypeParameters = function(ctx) {
};

// Exit a parse tree produced by javaParser#typeParameters.
javaListener.prototype.exitTypeParameters = function(ctx) {
};


// Enter a parse tree produced by javaParser#typeParameter.
javaListener.prototype.enterTypeParameter = function(ctx) {
};

// Exit a parse tree produced by javaParser#typeParameter.
javaListener.prototype.exitTypeParameter = function(ctx) {
};


// Enter a parse tree produced by javaParser#typeBound.
javaListener.prototype.enterTypeBound = function(ctx) {
};

// Exit a parse tree produced by javaParser#typeBound.
javaListener.prototype.exitTypeBound = function(ctx) {
};


// Enter a parse tree produced by javaParser#enumDeclaration.
javaListener.prototype.enterEnumDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#enumDeclaration.
javaListener.prototype.exitEnumDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#enumConstants.
javaListener.prototype.enterEnumConstants = function(ctx) {
};

// Exit a parse tree produced by javaParser#enumConstants.
javaListener.prototype.exitEnumConstants = function(ctx) {
};


// Enter a parse tree produced by javaParser#enumConstant.
javaListener.prototype.enterEnumConstant = function(ctx) {
};

// Exit a parse tree produced by javaParser#enumConstant.
javaListener.prototype.exitEnumConstant = function(ctx) {
};


// Enter a parse tree produced by javaParser#enumBodyDeclarations.
javaListener.prototype.enterEnumBodyDeclarations = function(ctx) {
};

// Exit a parse tree produced by javaParser#enumBodyDeclarations.
javaListener.prototype.exitEnumBodyDeclarations = function(ctx) {
};


// Enter a parse tree produced by javaParser#interfaceDeclaration.
javaListener.prototype.enterInterfaceDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#interfaceDeclaration.
javaListener.prototype.exitInterfaceDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#typeList.
javaListener.prototype.enterTypeList = function(ctx) {
};

// Exit a parse tree produced by javaParser#typeList.
javaListener.prototype.exitTypeList = function(ctx) {
};


// Enter a parse tree produced by javaParser#classBody.
javaListener.prototype.enterClassBody = function(ctx) {
};

// Exit a parse tree produced by javaParser#classBody.
javaListener.prototype.exitClassBody = function(ctx) {
};


// Enter a parse tree produced by javaParser#interfaceBody.
javaListener.prototype.enterInterfaceBody = function(ctx) {
};

// Exit a parse tree produced by javaParser#interfaceBody.
javaListener.prototype.exitInterfaceBody = function(ctx) {
};


// Enter a parse tree produced by javaParser#classBodyDeclaration.
javaListener.prototype.enterClassBodyDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#classBodyDeclaration.
javaListener.prototype.exitClassBodyDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#memberDeclaration.
javaListener.prototype.enterMemberDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#memberDeclaration.
javaListener.prototype.exitMemberDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#methodDeclaration.
javaListener.prototype.enterMethodDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#methodDeclaration.
javaListener.prototype.exitMethodDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#genericMethodDeclaration.
javaListener.prototype.enterGenericMethodDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#genericMethodDeclaration.
javaListener.prototype.exitGenericMethodDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#constructorDeclaration.
javaListener.prototype.enterConstructorDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#constructorDeclaration.
javaListener.prototype.exitConstructorDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#genericConstructorDeclaration.
javaListener.prototype.enterGenericConstructorDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#genericConstructorDeclaration.
javaListener.prototype.exitGenericConstructorDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#fieldDeclaration.
javaListener.prototype.enterFieldDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#fieldDeclaration.
javaListener.prototype.exitFieldDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#interfaceBodyDeclaration.
javaListener.prototype.enterInterfaceBodyDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#interfaceBodyDeclaration.
javaListener.prototype.exitInterfaceBodyDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#interfaceMemberDeclaration.
javaListener.prototype.enterInterfaceMemberDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#interfaceMemberDeclaration.
javaListener.prototype.exitInterfaceMemberDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#constDeclaration.
javaListener.prototype.enterConstDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#constDeclaration.
javaListener.prototype.exitConstDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#constantDeclarator.
javaListener.prototype.enterConstantDeclarator = function(ctx) {
};

// Exit a parse tree produced by javaParser#constantDeclarator.
javaListener.prototype.exitConstantDeclarator = function(ctx) {
};


// Enter a parse tree produced by javaParser#interfaceMethodDeclaration.
javaListener.prototype.enterInterfaceMethodDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#interfaceMethodDeclaration.
javaListener.prototype.exitInterfaceMethodDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#genericInterfaceMethodDeclaration.
javaListener.prototype.enterGenericInterfaceMethodDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#genericInterfaceMethodDeclaration.
javaListener.prototype.exitGenericInterfaceMethodDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#variableDeclarators.
javaListener.prototype.enterVariableDeclarators = function(ctx) {
};

// Exit a parse tree produced by javaParser#variableDeclarators.
javaListener.prototype.exitVariableDeclarators = function(ctx) {
};


// Enter a parse tree produced by javaParser#variableDeclarator.
javaListener.prototype.enterVariableDeclarator = function(ctx) {
};

// Exit a parse tree produced by javaParser#variableDeclarator.
javaListener.prototype.exitVariableDeclarator = function(ctx) {
};


// Enter a parse tree produced by javaParser#variableDeclaratorId.
javaListener.prototype.enterVariableDeclaratorId = function(ctx) {
};

// Exit a parse tree produced by javaParser#variableDeclaratorId.
javaListener.prototype.exitVariableDeclaratorId = function(ctx) {
};


// Enter a parse tree produced by javaParser#variableInitializer.
javaListener.prototype.enterVariableInitializer = function(ctx) {
};

// Exit a parse tree produced by javaParser#variableInitializer.
javaListener.prototype.exitVariableInitializer = function(ctx) {
};


// Enter a parse tree produced by javaParser#arrayInitializer.
javaListener.prototype.enterArrayInitializer = function(ctx) {
};

// Exit a parse tree produced by javaParser#arrayInitializer.
javaListener.prototype.exitArrayInitializer = function(ctx) {
};


// Enter a parse tree produced by javaParser#enumConstantName.
javaListener.prototype.enterEnumConstantName = function(ctx) {
};

// Exit a parse tree produced by javaParser#enumConstantName.
javaListener.prototype.exitEnumConstantName = function(ctx) {
};


// Enter a parse tree produced by javaParser#typeType.
javaListener.prototype.enterTypeType = function(ctx) {
};

// Exit a parse tree produced by javaParser#typeType.
javaListener.prototype.exitTypeType = function(ctx) {
};


// Enter a parse tree produced by javaParser#classOrInterfaceType.
javaListener.prototype.enterClassOrInterfaceType = function(ctx) {
};

// Exit a parse tree produced by javaParser#classOrInterfaceType.
javaListener.prototype.exitClassOrInterfaceType = function(ctx) {
};


// Enter a parse tree produced by javaParser#primitiveType.
javaListener.prototype.enterPrimitiveType = function(ctx) {
};

// Exit a parse tree produced by javaParser#primitiveType.
javaListener.prototype.exitPrimitiveType = function(ctx) {
};


// Enter a parse tree produced by javaParser#typeArguments.
javaListener.prototype.enterTypeArguments = function(ctx) {
};

// Exit a parse tree produced by javaParser#typeArguments.
javaListener.prototype.exitTypeArguments = function(ctx) {
};


// Enter a parse tree produced by javaParser#typeArgument.
javaListener.prototype.enterTypeArgument = function(ctx) {
};

// Exit a parse tree produced by javaParser#typeArgument.
javaListener.prototype.exitTypeArgument = function(ctx) {
};


// Enter a parse tree produced by javaParser#qualifiedNameList.
javaListener.prototype.enterQualifiedNameList = function(ctx) {
};

// Exit a parse tree produced by javaParser#qualifiedNameList.
javaListener.prototype.exitQualifiedNameList = function(ctx) {
};


// Enter a parse tree produced by javaParser#formalParameters.
javaListener.prototype.enterFormalParameters = function(ctx) {
};

// Exit a parse tree produced by javaParser#formalParameters.
javaListener.prototype.exitFormalParameters = function(ctx) {
};


// Enter a parse tree produced by javaParser#formalParameterList.
javaListener.prototype.enterFormalParameterList = function(ctx) {
};

// Exit a parse tree produced by javaParser#formalParameterList.
javaListener.prototype.exitFormalParameterList = function(ctx) {
};


// Enter a parse tree produced by javaParser#formalParameter.
javaListener.prototype.enterFormalParameter = function(ctx) {
};

// Exit a parse tree produced by javaParser#formalParameter.
javaListener.prototype.exitFormalParameter = function(ctx) {
};


// Enter a parse tree produced by javaParser#lastFormalParameter.
javaListener.prototype.enterLastFormalParameter = function(ctx) {
};

// Exit a parse tree produced by javaParser#lastFormalParameter.
javaListener.prototype.exitLastFormalParameter = function(ctx) {
};


// Enter a parse tree produced by javaParser#methodBody.
javaListener.prototype.enterMethodBody = function(ctx) {
};

// Exit a parse tree produced by javaParser#methodBody.
javaListener.prototype.exitMethodBody = function(ctx) {
};


// Enter a parse tree produced by javaParser#constructorBody.
javaListener.prototype.enterConstructorBody = function(ctx) {
};

// Exit a parse tree produced by javaParser#constructorBody.
javaListener.prototype.exitConstructorBody = function(ctx) {
};


// Enter a parse tree produced by javaParser#qualifiedName.
javaListener.prototype.enterQualifiedName = function(ctx) {
};

// Exit a parse tree produced by javaParser#qualifiedName.
javaListener.prototype.exitQualifiedName = function(ctx) {
};


// Enter a parse tree produced by javaParser#literal.
javaListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by javaParser#literal.
javaListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by javaParser#annotation.
javaListener.prototype.enterAnnotation = function(ctx) {
};

// Exit a parse tree produced by javaParser#annotation.
javaListener.prototype.exitAnnotation = function(ctx) {
};


// Enter a parse tree produced by javaParser#annotationName.
javaListener.prototype.enterAnnotationName = function(ctx) {
};

// Exit a parse tree produced by javaParser#annotationName.
javaListener.prototype.exitAnnotationName = function(ctx) {
};


// Enter a parse tree produced by javaParser#elementValuePairs.
javaListener.prototype.enterElementValuePairs = function(ctx) {
};

// Exit a parse tree produced by javaParser#elementValuePairs.
javaListener.prototype.exitElementValuePairs = function(ctx) {
};


// Enter a parse tree produced by javaParser#elementValuePair.
javaListener.prototype.enterElementValuePair = function(ctx) {
};

// Exit a parse tree produced by javaParser#elementValuePair.
javaListener.prototype.exitElementValuePair = function(ctx) {
};


// Enter a parse tree produced by javaParser#elementValue.
javaListener.prototype.enterElementValue = function(ctx) {
};

// Exit a parse tree produced by javaParser#elementValue.
javaListener.prototype.exitElementValue = function(ctx) {
};


// Enter a parse tree produced by javaParser#elementValueArrayInitializer.
javaListener.prototype.enterElementValueArrayInitializer = function(ctx) {
};

// Exit a parse tree produced by javaParser#elementValueArrayInitializer.
javaListener.prototype.exitElementValueArrayInitializer = function(ctx) {
};


// Enter a parse tree produced by javaParser#annotationTypeDeclaration.
javaListener.prototype.enterAnnotationTypeDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#annotationTypeDeclaration.
javaListener.prototype.exitAnnotationTypeDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#annotationTypeBody.
javaListener.prototype.enterAnnotationTypeBody = function(ctx) {
};

// Exit a parse tree produced by javaParser#annotationTypeBody.
javaListener.prototype.exitAnnotationTypeBody = function(ctx) {
};


// Enter a parse tree produced by javaParser#annotationTypeElementDeclaration.
javaListener.prototype.enterAnnotationTypeElementDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#annotationTypeElementDeclaration.
javaListener.prototype.exitAnnotationTypeElementDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#annotationTypeElementRest.
javaListener.prototype.enterAnnotationTypeElementRest = function(ctx) {
};

// Exit a parse tree produced by javaParser#annotationTypeElementRest.
javaListener.prototype.exitAnnotationTypeElementRest = function(ctx) {
};


// Enter a parse tree produced by javaParser#annotationMethodOrConstantRest.
javaListener.prototype.enterAnnotationMethodOrConstantRest = function(ctx) {
};

// Exit a parse tree produced by javaParser#annotationMethodOrConstantRest.
javaListener.prototype.exitAnnotationMethodOrConstantRest = function(ctx) {
};


// Enter a parse tree produced by javaParser#annotationMethodRest.
javaListener.prototype.enterAnnotationMethodRest = function(ctx) {
};

// Exit a parse tree produced by javaParser#annotationMethodRest.
javaListener.prototype.exitAnnotationMethodRest = function(ctx) {
};


// Enter a parse tree produced by javaParser#annotationConstantRest.
javaListener.prototype.enterAnnotationConstantRest = function(ctx) {
};

// Exit a parse tree produced by javaParser#annotationConstantRest.
javaListener.prototype.exitAnnotationConstantRest = function(ctx) {
};


// Enter a parse tree produced by javaParser#defaultValue.
javaListener.prototype.enterDefaultValue = function(ctx) {
};

// Exit a parse tree produced by javaParser#defaultValue.
javaListener.prototype.exitDefaultValue = function(ctx) {
};


// Enter a parse tree produced by javaParser#block.
javaListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by javaParser#block.
javaListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by javaParser#blockStatement.
javaListener.prototype.enterBlockStatement = function(ctx) {
};

// Exit a parse tree produced by javaParser#blockStatement.
javaListener.prototype.exitBlockStatement = function(ctx) {
};


// Enter a parse tree produced by javaParser#localVariableDeclarationStatement.
javaListener.prototype.enterLocalVariableDeclarationStatement = function(ctx) {
};

// Exit a parse tree produced by javaParser#localVariableDeclarationStatement.
javaListener.prototype.exitLocalVariableDeclarationStatement = function(ctx) {
};


// Enter a parse tree produced by javaParser#localVariableDeclaration.
javaListener.prototype.enterLocalVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by javaParser#localVariableDeclaration.
javaListener.prototype.exitLocalVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by javaParser#statement.
javaListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by javaParser#statement.
javaListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by javaParser#catchClause.
javaListener.prototype.enterCatchClause = function(ctx) {
};

// Exit a parse tree produced by javaParser#catchClause.
javaListener.prototype.exitCatchClause = function(ctx) {
};


// Enter a parse tree produced by javaParser#catchType.
javaListener.prototype.enterCatchType = function(ctx) {
};

// Exit a parse tree produced by javaParser#catchType.
javaListener.prototype.exitCatchType = function(ctx) {
};


// Enter a parse tree produced by javaParser#finallyBlock.
javaListener.prototype.enterFinallyBlock = function(ctx) {
};

// Exit a parse tree produced by javaParser#finallyBlock.
javaListener.prototype.exitFinallyBlock = function(ctx) {
};


// Enter a parse tree produced by javaParser#resourceSpecification.
javaListener.prototype.enterResourceSpecification = function(ctx) {
};

// Exit a parse tree produced by javaParser#resourceSpecification.
javaListener.prototype.exitResourceSpecification = function(ctx) {
};


// Enter a parse tree produced by javaParser#resources.
javaListener.prototype.enterResources = function(ctx) {
};

// Exit a parse tree produced by javaParser#resources.
javaListener.prototype.exitResources = function(ctx) {
};


// Enter a parse tree produced by javaParser#resource.
javaListener.prototype.enterResource = function(ctx) {
};

// Exit a parse tree produced by javaParser#resource.
javaListener.prototype.exitResource = function(ctx) {
};


// Enter a parse tree produced by javaParser#switchBlockStatementGroup.
javaListener.prototype.enterSwitchBlockStatementGroup = function(ctx) {
};

// Exit a parse tree produced by javaParser#switchBlockStatementGroup.
javaListener.prototype.exitSwitchBlockStatementGroup = function(ctx) {
};


// Enter a parse tree produced by javaParser#switchLabel.
javaListener.prototype.enterSwitchLabel = function(ctx) {
};

// Exit a parse tree produced by javaParser#switchLabel.
javaListener.prototype.exitSwitchLabel = function(ctx) {
};


// Enter a parse tree produced by javaParser#forControl.
javaListener.prototype.enterForControl = function(ctx) {
};

// Exit a parse tree produced by javaParser#forControl.
javaListener.prototype.exitForControl = function(ctx) {
};


// Enter a parse tree produced by javaParser#forInit.
javaListener.prototype.enterForInit = function(ctx) {
};

// Exit a parse tree produced by javaParser#forInit.
javaListener.prototype.exitForInit = function(ctx) {
};


// Enter a parse tree produced by javaParser#enhancedForControl.
javaListener.prototype.enterEnhancedForControl = function(ctx) {
};

// Exit a parse tree produced by javaParser#enhancedForControl.
javaListener.prototype.exitEnhancedForControl = function(ctx) {
};


// Enter a parse tree produced by javaParser#forUpdate.
javaListener.prototype.enterForUpdate = function(ctx) {
};

// Exit a parse tree produced by javaParser#forUpdate.
javaListener.prototype.exitForUpdate = function(ctx) {
};


// Enter a parse tree produced by javaParser#parExpression.
javaListener.prototype.enterParExpression = function(ctx) {
};

// Exit a parse tree produced by javaParser#parExpression.
javaListener.prototype.exitParExpression = function(ctx) {
};


// Enter a parse tree produced by javaParser#expressionList.
javaListener.prototype.enterExpressionList = function(ctx) {
};

// Exit a parse tree produced by javaParser#expressionList.
javaListener.prototype.exitExpressionList = function(ctx) {
};


// Enter a parse tree produced by javaParser#statementExpression.
javaListener.prototype.enterStatementExpression = function(ctx) {
};

// Exit a parse tree produced by javaParser#statementExpression.
javaListener.prototype.exitStatementExpression = function(ctx) {
};


// Enter a parse tree produced by javaParser#constantExpression.
javaListener.prototype.enterConstantExpression = function(ctx) {
};

// Exit a parse tree produced by javaParser#constantExpression.
javaListener.prototype.exitConstantExpression = function(ctx) {
};


// Enter a parse tree produced by javaParser#expression.
javaListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by javaParser#expression.
javaListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by javaParser#primary.
javaListener.prototype.enterPrimary = function(ctx) {
};

// Exit a parse tree produced by javaParser#primary.
javaListener.prototype.exitPrimary = function(ctx) {
};


// Enter a parse tree produced by javaParser#creator.
javaListener.prototype.enterCreator = function(ctx) {
};

// Exit a parse tree produced by javaParser#creator.
javaListener.prototype.exitCreator = function(ctx) {
};


// Enter a parse tree produced by javaParser#createdName.
javaListener.prototype.enterCreatedName = function(ctx) {
};

// Exit a parse tree produced by javaParser#createdName.
javaListener.prototype.exitCreatedName = function(ctx) {
};


// Enter a parse tree produced by javaParser#innerCreator.
javaListener.prototype.enterInnerCreator = function(ctx) {
};

// Exit a parse tree produced by javaParser#innerCreator.
javaListener.prototype.exitInnerCreator = function(ctx) {
};


// Enter a parse tree produced by javaParser#arrayCreatorRest.
javaListener.prototype.enterArrayCreatorRest = function(ctx) {
};

// Exit a parse tree produced by javaParser#arrayCreatorRest.
javaListener.prototype.exitArrayCreatorRest = function(ctx) {
};


// Enter a parse tree produced by javaParser#classCreatorRest.
javaListener.prototype.enterClassCreatorRest = function(ctx) {
};

// Exit a parse tree produced by javaParser#classCreatorRest.
javaListener.prototype.exitClassCreatorRest = function(ctx) {
};


// Enter a parse tree produced by javaParser#explicitGenericInvocation.
javaListener.prototype.enterExplicitGenericInvocation = function(ctx) {
};

// Exit a parse tree produced by javaParser#explicitGenericInvocation.
javaListener.prototype.exitExplicitGenericInvocation = function(ctx) {
};


// Enter a parse tree produced by javaParser#nonWildcardTypeArguments.
javaListener.prototype.enterNonWildcardTypeArguments = function(ctx) {
};

// Exit a parse tree produced by javaParser#nonWildcardTypeArguments.
javaListener.prototype.exitNonWildcardTypeArguments = function(ctx) {
};


// Enter a parse tree produced by javaParser#typeArgumentsOrDiamond.
javaListener.prototype.enterTypeArgumentsOrDiamond = function(ctx) {
};

// Exit a parse tree produced by javaParser#typeArgumentsOrDiamond.
javaListener.prototype.exitTypeArgumentsOrDiamond = function(ctx) {
};


// Enter a parse tree produced by javaParser#nonWildcardTypeArgumentsOrDiamond.
javaListener.prototype.enterNonWildcardTypeArgumentsOrDiamond = function(ctx) {
};

// Exit a parse tree produced by javaParser#nonWildcardTypeArgumentsOrDiamond.
javaListener.prototype.exitNonWildcardTypeArgumentsOrDiamond = function(ctx) {
};


// Enter a parse tree produced by javaParser#superSuffix.
javaListener.prototype.enterSuperSuffix = function(ctx) {
};

// Exit a parse tree produced by javaParser#superSuffix.
javaListener.prototype.exitSuperSuffix = function(ctx) {
};


// Enter a parse tree produced by javaParser#explicitGenericInvocationSuffix.
javaListener.prototype.enterExplicitGenericInvocationSuffix = function(ctx) {
};

// Exit a parse tree produced by javaParser#explicitGenericInvocationSuffix.
javaListener.prototype.exitExplicitGenericInvocationSuffix = function(ctx) {
};


// Enter a parse tree produced by javaParser#arguments.
javaListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by javaParser#arguments.
javaListener.prototype.exitArguments = function(ctx) {
};



exports.javaListener = javaListener;